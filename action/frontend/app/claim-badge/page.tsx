"use client";

import { useState, useEffect } from "react";
import WalletGuard from "@/components/WalletGuard";
import { useFhevm } from "@/fhevm/useFhevm";
import { useMetaMaskEthersSigner } from "@/hooks/metamask/useMetaMaskEthersSigner";
import { useInMemoryStorage } from "@/hooks/useInMemoryStorage";
import { useSkillForge } from "@/hooks/useSkillForge";
import { useValidatedProofs } from "@/hooks/useValidatedProofs";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3" as `0x${string}`;

export default function ClaimBadgePage() {
  const { storage } = useInMemoryStorage();
  const { provider, chainId, ethersSigner, ethersReadonlyProvider, initialMockChains, isConnected, accounts } = useMetaMaskEthersSigner();
  const { instance: fhevmInstance } = useFhevm({ provider, chainId, initialMockChains, enabled: isConnected });
  const { claimBadge, message, isLoading } = useSkillForge({ 
    instance: fhevmInstance, 
    fhevmDecryptionSignatureStorage: storage, 
    contractAddress: CONTRACT_ADDRESS, 
    ethersSigner, 
    ethersReadonlyProvider, 
    chainId 
  });

  const { proofs: validatedProofs, isLoading: proofsLoading } = useValidatedProofs({ 
    contractAddress: CONTRACT_ADDRESS, 
    ethersReadonlyProvider 
  });

  const [selectedCourseId, setSelectedCourseId] = useState<number>(0);
  const [badgeName, setBadgeName] = useState("");
  const [totalScore, setTotalScore] = useState(0);

  // Group validated proofs by course
  const courseGroups = validatedProofs
    .filter(p => p.status === 1 && p.learner.toLowerCase() === accounts[0]?.toLowerCase())
    .reduce((acc, proof) => {
      if (!acc[proof.courseId]) {
        acc[proof.courseId] = [];
      }
      acc[proof.courseId].push(proof);
      return acc;
    }, {} as { [key: number]: typeof validatedProofs });

  // Auto-calculate total score when selecting course
  useEffect(() => {
    if (selectedCourseId > 0 && courseGroups[selectedCourseId]) {
      const count = courseGroups[selectedCourseId].length;
      setTotalScore(count * 85);
    }
  }, [selectedCourseId, courseGroups]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCourseId === 0) {
      alert("Please select a course");
      return;
    }
    const mockCID = `Qm${Math.random().toString(36).substring(2, 15)}`;
    await claimBadge(selectedCourseId, mockCID, totalScore);
  };

  return (
    <WalletGuard>
      <div className="min-h-[calc(100vh-5rem)] py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="h-1 w-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
              <span className="text-5xl animate-float">🏅</span>
              <div className="h-1 w-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </div>
            <h1 className="text-5xl font-display font-black mb-3">
              <span className="gradient-text">Claim Badge</span>
            </h1>
            <p className="text-white/80 text-lg">Select completed course and forge your achievement badge</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left: Completed Courses */}
            <div className="glass-strong rounded-3xl p-6 shadow-glass">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Completed Courses</h2>
              
              {proofsLoading ? (
                <div className="text-center py-8">
                  <div className="inline-block h-8 w-8 border-4 border-white/20 border-t-primary rounded-full animate-spin"></div>
                  <p className="text-white/70 mt-2">Loading...</p>
                </div>
              ) : Object.keys(courseGroups).length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4 animate-float">📚</div>
                  <p className="text-white/60">No completed courses</p>
                  <p className="text-white/40 text-sm mt-2">Complete and validate challenges to claim badges</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {Object.entries(courseGroups).map(([courseId, proofs]) => (
                    <div
                      key={courseId}
                      onClick={() => setSelectedCourseId(Number(courseId))}
                      className={`p-5 rounded-2xl cursor-pointer transition-all ${
                        selectedCourseId === Number(courseId)
                          ? 'glass-strong shadow-glow border-2 border-primary'
                          : 'glass hover:glass-strong'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-white font-bold text-xl">Course #{courseId}</h3>
                          <p className="text-white/60 text-sm mt-1">
                            Completed {proofs.length} challenge{proofs.length > 1 ? 's' : ''}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-bold text-white">
                            ✓ Completed
                          </div>
                          {selectedCourseId === Number(courseId) && (
                            <div className="mt-2 text-primary text-xs font-bold">
                              ◉ Selected
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Challenge list */}
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-white/50 text-xs mb-2">Challenges completed:</p>
                        <div className="flex flex-wrap gap-2">
                          {proofs.map((proof) => (
                            <span
                              key={proof.id}
                              className="px-2 py-1 glass-dark rounded-lg text-xs text-white/80"
                            >
                              #{proof.challengeId}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Badge Form */}
            <div className="glass-strong rounded-3xl shadow-glass-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8">
                <h2 className="text-3xl font-display font-black text-white">Badge Information</h2>
                <p className="text-white/80 mt-2">✨ Total score will be encrypted</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Selected Course ID
                  </label>
                  <div className="w-full px-4 py-3 glass rounded-2xl text-white text-center font-bold text-2xl">
                    {selectedCourseId > 0 ? `#${selectedCourseId}` : 'Select course from left'}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Badge Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={badgeName}
                    onChange={(e) => setBadgeName(e.target.value)}
                    placeholder="e.g., Full-Stack Master"
                    className="w-full px-4 py-3 glass rounded-2xl text-white placeholder-white/40 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Total Score <span className="text-accent">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={totalScore}
                    onChange={(e) => setTotalScore(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all"
                  />
                  <p className="text-xs text-white/50 mt-2">
                    🔒 Will be encrypted with FHE
                  </p>
                  {selectedCourseId > 0 && courseGroups[selectedCourseId] && (
                    <p className="text-xs text-white/60 mt-2">
                      💡 Suggestion: {courseGroups[selectedCourseId].length} challenge{courseGroups[selectedCourseId].length > 1 ? 's' : ''} completed
                    </p>
                  )}
                </div>

                {selectedCourseId === 0 && (
                  <div className="glass-dark rounded-2xl p-4 border border-amber-500/30">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">👈</span>
                      <p className="text-sm text-white/70">
                        Please select a completed course from the left
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || selectedCourseId === 0}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl font-bold text-white shadow-glow hover:shadow-glow-cyan transition-all btn-glass disabled:opacity-50"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isLoading ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Claiming...</span>
                      </>
                    ) : (
                      <>
                        <span>🏅</span>
                        <span>Claim Badge</span>
                      </>
                    )}
                  </span>
                </button>

                {message && (
                  <div className="glass-dark rounded-2xl p-4 border border-white/10">
                    <p className="text-sm text-white/90 break-all">{message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </WalletGuard>
  );
}
