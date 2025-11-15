// Auto-generated file - do not edit manually
export const SkillForgeABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "badgeId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "earner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "badgeCID",
        "type": "string"
      }
    ],
    "name": "BadgeClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "courseCID",
        "type": "string"
      }
    ],
    "name": "CourseForged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "proofId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "learner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "proofCID",
        "type": "string"
      }
    ],
    "name": "ProofSubmitted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "proofId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "validator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "enum SkillForge.ProofStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "ProofValidated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "validator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "authorized",
        "type": "bool"
      }
    ],
    "name": "ValidatorGranted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "authorizedValidators",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "badges",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "earner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "badgeCID",
        "type": "string"
      },
      {
        "internalType": "euint64",
        "name": "encryptedTotalScore",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "claimedAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "proofIds",
        "type": "uint256[]"
      }
    ],
    "name": "calculateTotalScore",
    "outputs": [
      {
        "internalType": "euint32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "badgeCID",
        "type": "string"
      },
      {
        "internalType": "externalEuint64",
        "name": "encryptedTotalScore",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "inputProof",
        "type": "bytes"
      }
    ],
    "name": "claimBadge",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "badgeId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "courses",
    "outputs": [
      {
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "courseCID",
        "type": "string"
      },
      {
        "internalType": "euint32",
        "name": "totalChallenges",
        "type": "bytes32"
      },
      {
        "internalType": "euint32",
        "name": "completedChallenges",
        "type": "bytes32"
      },
      {
        "internalType": "bool",
        "name": "active",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "forgedAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "courseCID",
        "type": "string"
      },
      {
        "internalType": "externalEuint32",
        "name": "encryptedTotalChallenges",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "inputProof",
        "type": "bytes"
      }
    ],
    "name": "forgeCourse",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "badgeId",
        "type": "uint256"
      }
    ],
    "name": "getBadge",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "earner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "badgeCID",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "claimedAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "badgeId",
        "type": "uint256"
      }
    ],
    "name": "getBadgeEncryptedScore",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "encryptedTotalScoreHandle",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      }
    ],
    "name": "getCourse",
    "outputs": [
      {
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "courseCID",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "active",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "forgedAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "proofId",
        "type": "uint256"
      }
    ],
    "name": "getProof",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "challengeId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "learner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "proofCID",
        "type": "string"
      },
      {
        "internalType": "enum SkillForge.ProofStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "validator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "submittedAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "proofId",
        "type": "uint256"
      }
    ],
    "name": "getProofEncryptedScore",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "encryptedScoreHandle",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "validator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "authorized",
        "type": "bool"
      }
    ],
    "name": "grantValidatorRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextBadgeId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextCourseId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextProofId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proofs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "challengeId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "learner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "proofCID",
        "type": "string"
      },
      {
        "internalType": "euint32",
        "name": "encryptedScore",
        "type": "bytes32"
      },
      {
        "internalType": "enum SkillForge.ProofStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "validator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "submittedAt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "validatedAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "protocolId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "challengeId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "proofCID",
        "type": "string"
      },
      {
        "internalType": "externalEuint32",
        "name": "encryptedScore",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "inputProof",
        "type": "bytes"
      }
    ],
    "name": "submitProof",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "proofId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "internalType": "externalEuint32",
        "name": "encryptedTotalChallenges",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "inputProof",
        "type": "bytes"
      }
    ],
    "name": "updateCourseChallenges",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "proofId",
        "type": "uint256"
      },
      {
        "internalType": "enum SkillForge.ProofStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "externalEuint32",
        "name": "newEncryptedScore",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "inputProof",
        "type": "bytes"
      }
    ],
    "name": "validateProof",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
