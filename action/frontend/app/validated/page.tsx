"use client";

import { useState } from "react";
import WalletGuard from "@/components/WalletGuard";
import { useMetaMaskEthersSigner } from "@/hooks/metamask/useMetaMaskEthersSigner";
import { useValidatedProofs } from "@/hooks/useValidatedProofs";
import { useFhevm } from "@/fhevm/useFhevm";
import { useInMemoryStorage } from "@/hooks/useInMemoryStorage";
import { useSkillForge } from "@/hooks/useSkillForge";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3" as `0x${string}`;

export default function ValidatedPage() {
  const { storage } = useInMemoryStorage();
  const { provider, chainId, ethersSigner, ethersReadonlyProvider, initialMockChains } = useMetaMaskEthersSigner();
  const { instance: fhevmInstance } = useFhevm({ provider, chainId, initialMockChains, enabled: true });
  
  const { proofs, stats, isLoading } = useValidatedProofs({ contractAddress: CONTRACT_ADDRESS, ethersReadonlyProvider });
  const { decryptScore } = useSkillForge({
    instance: fhevmInstance,
    fhevmDecryptionSignatureStorage: storage,
    contractAddress: CONTRACT_ADDRESS,
    ethersSigner,
    ethersReadonlyProvider,
    chainId,
  });

  const [decryptedScores, setDecryptedScores] = useState<{ [key: number]: string }>({});
  const [decryptingId, setDecryptingId] = useState<number | null>(null);

  const handleDecrypt = async (proofId: number, encryptedScoreHandle: string) => {
    setDecryptingId(proofId);
    try {
      const score = await decryptScore(encryptedScoreHandle);
      if (score !== null) {
        setDecryptedScores(prev => ({ ...prev, [proofId]: score.toString() }));
      }
    } catch (error) {
      console.error("Decryption failed:", error);
    } finally {
      setDecryptingId(null);
    }
  };

  return (
    <WalletGuard>
      <div className="min-h-[calc(100vh-5rem)] py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="h-1 w-8 bg-gradient-purple rounded-full"></div>
              <span className="text-5xl animate-float">✓</span>
              <div className="h-1 w-8 bg-gradient-purple rounded-full"></div>
            </div>
            <h1 className="text-5xl font-display font-black mb-3">
              <span className="gradient-text">Validated Proofs</span>
            </h1>
            <p className="text-white/80 text-lg">View all validated skill proofs</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all">
              <p className="text-white/60 text-sm uppercase mb-2 font-semibold">Total</p>
              <p className="text-4xl font-display font-black gradient-text">{stats.total}</p>
            </div>
            <div className="glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all border-2 border-success/30">
              <p className="text-white/60 text-sm uppercase mb-2 font-semibold">Approved</p>
              <p className="text-4xl font-display font-black text-success">{stats.approved}</p>
            </div>
            <div className="glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all border-2 border-danger/30">
              <p className="text-white/60 text-sm uppercase mb-2 font-semibold">Rejected</p>
              <p className="text-4xl font-display font-black text-danger">{stats.rejected}</p>
            </div>
          </div>

          {/* Proofs List */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-12 w-12 border-4 border-white/20 border-t-primary rounded-full animate-spin"></div>
              <p className="text-white/70 mt-4">Loading...</p>
            </div>
          ) : proofs.length === 0 ? (
            <div className="text-center py-16">
              <div className="glass-strong rounded-3xl p-12 max-w-md mx-auto">
                <div className="text-7xl mb-6 animate-float">📋</div>
                <h3 className="text-2xl font-bold text-white mb-3">No Validated Proofs</h3>
                <p className="text-white/60">Waiting for validators to review your submissions</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proofs.map((proof, index) => (
                <div 
                  key={proof.id} 
                  className="glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Title and Status */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display font-black gradient-text">
                      Proof #{proof.id}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-glow ${
                      proof.status === 1 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                        : 'bg-gradient-to-r from-red-500 to-rose-500 text-white'
                    }`}>
                      {proof.status === 1 ? '✓ Approved' : '✗ Rejected'}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    <div className="glass-dark rounded-2xl p-3">
                      <p className="text-white/60 text-xs mb-1">Course</p>
                      <p className="text-white font-bold">#{proof.courseId}</p>
                    </div>
                    <div className="glass-dark rounded-2xl p-3">
                      <p className="text-white/60 text-xs mb-1">Challenge</p>
                      <p className="text-white font-bold">#{proof.challengeId}</p>
                    </div>
                    <div className="glass-dark rounded-2xl p-3">
                      <p className="text-white/60 text-xs mb-1">Learner</p>
                      <p className="text-white font-mono text-sm">{proof.learner.slice(0, 16)}...</p>
                    </div>
                    
                    {/* Score Area */}
                    {proof.encryptedScoreHandle && (
                      <div className="glass-dark rounded-2xl p-4 border-2 border-primary/30">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-white/60 text-xs font-semibold uppercase">Score</p>
                          {decryptedScores[proof.id] && (
                            <span className="text-xs text-success">🔓 Decrypted</span>
                          )}
                        </div>
                        
                        {decryptedScores[proof.id] ? (
                          <div className="text-center py-3">
                            <p className="text-4xl font-display font-black gradient-text">
                              {decryptedScores[proof.id]}
                            </p>
                            <p className="text-white/60 text-xs mt-1">/ 100</p>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleDecrypt(proof.id, proof.encryptedScoreHandle!)}
                            disabled={decryptingId === proof.id}
                            className="w-full py-3 bg-gradient-purple rounded-xl font-bold text-white shadow-glow hover:shadow-glow-cyan transition-all btn-glass disabled:opacity-50"
                          >
                            {decryptingId === proof.id ? (
                              <span className="flex items-center justify-center space-x-2">
                                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Decrypting...</span>
                              </span>
                            ) : (
                              <span className="flex items-center justify-center space-x-2">
                                <span>🔓</span>
                                <span>Decrypt Score</span>
                              </span>
                            )}
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Timestamp */}
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs text-white/50">
                      Submitted: {new Date(proof.submittedAt * 1000).toLocaleString('en-US')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </WalletGuard>
  );
}
