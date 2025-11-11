// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {FHE, euint32, euint64, externalEuint32, externalEuint64} from "@fhevm/solidity/lib/FHE.sol";
import {ZamaEthereumConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

/// @title SkillForge - 技能锻造与成就认证平台
/// @notice 使用FHEVM进行加密存储和计算的技能培养系统
contract SkillForge is ZamaEthereumConfig {
    enum ProofStatus { Pending, Validated, Rejected }
    
    struct Course {
        address creator;
        string courseCID; // IPFS CID for course metadata
        euint32 totalChallenges; // 加密存储的挑战总数
        euint32 completedChallenges; // 加密存储的已完成挑战数
        bool active;
        uint256 forgedAt;
    }
    
    struct Proof {
        uint256 courseId;
        uint256 challengeId;
        address learner;
        string proofCID; // IPFS CID for proof content
        euint32 encryptedScore; // 加密存储的分数
        ProofStatus status;
        address validator; // 验证者地址
        uint256 submittedAt;
        uint256 validatedAt;
    }
    
    struct Badge {
        uint256 courseId;
        address earner;
        string badgeCID; // IPFS CID for badge metadata
        euint64 encryptedTotalScore; // 加密存储的总分
        uint256 claimedAt;
    }
    
    // 状态变量
    uint256 public nextCourseId = 1;
    uint256 public nextProofId = 1;
    uint256 public nextBadgeId = 1;
    
    mapping(uint256 => Course) public courses;
    mapping(uint256 => Proof) public proofs;
    mapping(uint256 => Badge) public badges;
    mapping(address => bool) public authorizedValidators; // 白名单验证者
    
    // 事件
    event CourseForged(uint256 indexed courseId, address indexed creator, string courseCID);
    event ProofSubmitted(uint256 indexed proofId, uint256 indexed courseId, address indexed learner, string proofCID);
    event ProofValidated(uint256 indexed proofId, address indexed validator, ProofStatus status);
    event BadgeClaimed(uint256 indexed badgeId, uint256 indexed courseId, address indexed earner, string badgeCID);
    event ValidatorGranted(address indexed validator, bool authorized);
    
    modifier onlyAuthorizedValidator() {
        require(authorizedValidators[msg.sender], "Not authorized validator");
        _;
    }
    
    modifier onlyCourseCreator(uint256 courseId) {
        require(courses[courseId].creator == msg.sender, "Not course creator");
        _;
    }
    
    /// @notice 授权/取消授权验证者
    function grantValidatorRole(address validator, bool authorized) external {
        // 简化版：任何人都可以授权，实际应该由管理员控制
        authorizedValidators[validator] = authorized;
        emit ValidatorGranted(validator, authorized);
    }
    
    /// @notice 锻造课程
    /// @param courseCID IPFS CID containing course metadata
    /// @param encryptedTotalChallenges 加密的挑战总数
    function forgeCourse(
        string memory courseCID,
        externalEuint32 encryptedTotalChallenges,
        bytes calldata inputProof
    ) external returns (uint256 courseId) {
        euint32 totalChallenges = FHE.fromExternal(encryptedTotalChallenges, inputProof);
        
        courseId = nextCourseId++;
        euint32 completedChallenges = FHE.asEuint32(0); // 初始化为0
        FHE.allowThis(completedChallenges); // 允许合约使用completedChallenges
        
        courses[courseId] = Course({
            creator: msg.sender,
            courseCID: courseCID,
            totalChallenges: totalChallenges,
            completedChallenges: completedChallenges,
            active: true,
            forgedAt: block.timestamp
        });
        
        FHE.allowThis(totalChallenges);
        FHE.allow(totalChallenges, msg.sender);
        
        emit CourseForged(courseId, msg.sender, courseCID);
    }
    
    /// @notice 更新课程的挑战总数（加密）
    function updateCourseChallenges(
        uint256 courseId,
        externalEuint32 encryptedTotalChallenges,
        bytes calldata inputProof
    ) external onlyCourseCreator(courseId) {
        euint32 totalChallenges = FHE.fromExternal(encryptedTotalChallenges, inputProof);
        courses[courseId].totalChallenges = totalChallenges;
        
        FHE.allowThis(totalChallenges);
        FHE.allow(totalChallenges, msg.sender);
    }
    
    /// @notice 提交技能证明
    /// @param courseId 课程ID
    /// @param challengeId 挑战ID
    /// @param proofCID IPFS CID containing proof content
    /// @param encryptedScore 加密的分数
    function submitProof(
        uint256 courseId,
        uint256 challengeId,
        string memory proofCID,
        externalEuint32 encryptedScore,
        bytes calldata inputProof
    ) external returns (uint256 proofId) {
        require(courses[courseId].active, "Course not active");
        
        euint32 score = FHE.fromExternal(encryptedScore, inputProof);
        
        proofId = nextProofId++;
        proofs[proofId] = Proof({
            courseId: courseId,
            challengeId: challengeId,
            learner: msg.sender,
            proofCID: proofCID,
            encryptedScore: score,
            status: ProofStatus.Pending,
            validator: address(0),
            submittedAt: block.timestamp,
            validatedAt: 0
        });
        
        FHE.allowThis(score);
        FHE.allow(score, msg.sender);
        
        emit ProofSubmitted(proofId, courseId, msg.sender, proofCID);
    }
    
    /// @notice 验证者审核提交（在加密状态下更新分数）
    /// @param proofId 证明ID
    /// @param status 审核状态
    /// @param newEncryptedScore 新的加密分数（如果需要修改）
    function validateProof(
        uint256 proofId,
        ProofStatus status,
        externalEuint32 newEncryptedScore,
        bytes calldata inputProof
    ) external onlyAuthorizedValidator {
        Proof storage proof = proofs[proofId];
        require(proof.status == ProofStatus.Pending, "Already validated");
        require(status != ProofStatus.Pending, "Invalid status");
        
        // 如果提供了新分数，则更新（在加密状态下）
        if (status == ProofStatus.Validated) {
            euint32 newScore = FHE.fromExternal(newEncryptedScore, inputProof);
            proof.encryptedScore = newScore;
            
            FHE.allowThis(newScore);
            FHE.allow(newScore, proof.learner);
            FHE.allow(newScore, msg.sender);
            
            // 在加密状态下增加完成的挑战数
            Course storage course = courses[proof.courseId];
            FHE.allowThis(course.completedChallenges);
            course.completedChallenges = FHE.add(course.completedChallenges, 1);
            FHE.allowThis(course.completedChallenges);
        }
        
        proof.status = status;
        proof.validator = msg.sender;
        proof.validatedAt = block.timestamp;
        
        emit ProofValidated(proofId, msg.sender, status);
    }
    
    /// @notice 在加密状态下计算总分
    /// @param proofIds 证明ID数组
    /// @dev 注意：FHE操作会修改状态，所以不能是view函数
    function calculateTotalScore(uint256[] calldata proofIds) 
        external 
        returns (euint32) 
    {
        require(proofIds.length > 0, "No proofs");
        
        euint32 sum = FHE.asEuint32(0);
        euint32 count = FHE.asEuint32(0);
        
        for (uint256 i = 0; i < proofIds.length; i++) {
            Proof storage proof = proofs[proofIds[i]];
            if (proof.status == ProofStatus.Validated) {
                sum = FHE.add(sum, proof.encryptedScore);
                count = FHE.add(count, FHE.asEuint32(1));
            }
        }
        
        // 简化：返回总和，实际除法需要更复杂的处理
        FHE.allowThis(sum);
        return sum;
    }
    
    /// @notice 领取成就徽章
    /// @param courseId 课程ID
    /// @param badgeCID IPFS CID for badge metadata
    /// @param encryptedTotalScore 加密的总分
    function claimBadge(
        uint256 courseId,
        string memory badgeCID,
        externalEuint64 encryptedTotalScore,
        bytes calldata inputProof
    ) external returns (uint256 badgeId) {
        require(courses[courseId].active, "Course not active");
        
        euint64 totalScore = FHE.fromExternal(encryptedTotalScore, inputProof);
        
        badgeId = nextBadgeId++;
        badges[badgeId] = Badge({
            courseId: courseId,
            earner: msg.sender,
            badgeCID: badgeCID,
            encryptedTotalScore: totalScore,
            claimedAt: block.timestamp
        });
        
        FHE.allowThis(totalScore);
        FHE.allow(totalScore, msg.sender);
        
        emit BadgeClaimed(badgeId, courseId, msg.sender, badgeCID);
    }
    
    /// @notice 获取课程信息
    function getCourse(uint256 courseId) 
        external 
        view 
        returns (
            address creator,
            string memory courseCID,
            bool active,
            uint256 forgedAt
        ) 
    {
        Course storage course = courses[courseId];
        require(course.creator != address(0), "Course not found");
        return (course.creator, course.courseCID, course.active, course.forgedAt);
    }
    
    /// @notice 获取证明信息
    function getProof(uint256 proofId)
        external
        view
        returns (
            uint256 courseId,
            uint256 challengeId,
            address learner,
            string memory proofCID,
            ProofStatus status,
            address validator,
            uint256 submittedAt
        )
    {
        Proof storage proof = proofs[proofId];
        require(proof.learner != address(0), "Proof not found");
        return (
            proof.courseId,
            proof.challengeId,
            proof.learner,
            proof.proofCID,
            proof.status,
            proof.validator,
            proof.submittedAt
        );
    }
    
    /// @notice 获取徽章信息
    function getBadge(uint256 badgeId)
        external
        view
        returns (
            uint256 courseId,
            address earner,
            string memory badgeCID,
            uint256 claimedAt
        )
    {
        Badge storage badge = badges[badgeId];
        require(badge.earner != address(0), "Badge not found");
        return (badge.courseId, badge.earner, badge.badgeCID, badge.claimedAt);
    }
    
    /// @notice 获取徽章的加密分数handle（用于解密）
    /// @param badgeId 徽章ID
    /// @return encryptedTotalScoreHandle 加密分数的handle（bytes32格式）
    function getBadgeEncryptedScore(uint256 badgeId)
        external
        view
        returns (bytes32 encryptedTotalScoreHandle)
    {
        Badge storage badge = badges[badgeId];
        require(badge.earner != address(0), "Badge not found");
        return euint64.unwrap(badge.encryptedTotalScore);
    }
    
    /// @notice 获取证明的加密分数handle（用于解密）
    /// @param proofId 证明ID
    /// @return encryptedScoreHandle 加密分数的handle（bytes32格式）
    function getProofEncryptedScore(uint256 proofId)
        external
        view
        returns (bytes32 encryptedScoreHandle)
    {
        Proof storage proof = proofs[proofId];
        require(proof.learner != address(0), "Proof not found");
        return euint32.unwrap(proof.encryptedScore);
    }
}


