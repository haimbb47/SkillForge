"use client";

import { useState } from "react";
import WalletGuard from "@/components/WalletGuard";
import { useFhevm } from "@/fhevm/useFhevm";
import { useMetaMaskEthersSigner } from "@/hooks/metamask/useMetaMaskEthersSigner";
import { useInMemoryStorage } from "@/hooks/useInMemoryStorage";
import { useSkillForge } from "@/hooks/useSkillForge";
import { useProofs } from "@/hooks/useProofs";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3" as `0x${string}`;

export default function ValidatePage() {
  const { storage } = useInMemoryStorage();
  const { provider, chainId, ethersSigner, ethersReadonlyProvider, initialMockChains, isConnected } = useMetaMaskEthersSigner();
  const { instance: fhevmInstance } = useFhevm({ provider, chainId, initialMockChains, enabled: isConnected });
  const { validateProof, message, isLoading } = useSkillForge({ instance: fhevmInstance, fhevmDecryptionSignatureStorage: storage, contractAddress: CONTRACT_ADDRESS, ethersSigner, ethersReadonlyProvider, chainId });
  const { proofs, isLoading: proofsLoading } = useProofs({ contractAddress: CONTRACT_ADDRESS, ethersReadonlyProvider, instance: fhevmInstance, ethersSigner, fhevmDecryptionSignatureStorage: storage, chainId });

  const [selectedProof, setSelectedProof] = useState<number>(0);
  const [newScore, setNewScore] = useState<number>(85);
  const [validationStatus, setValidationStatus] = useState<number>(1);

  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProof > 0) {
      await validateProof(selectedProof, validationStatus, newScore);
    }
  };

  return (
    <WalletGuard>
      <div className="min-h-[calc(100vh-5rem)] py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="h-1 w-8 bg-gradient-purple rounded-full"></div>
              <span className="text-5xl animate-float">✓</span>
              <div className="h-1 w-8 bg-gradient-purple rounded-full"></div>
            </div>
            <h1 className="text-5xl font-display font-black mb-3">
              <span className="gradient-text">Validate Proofs</span>
            </h1>
            <p className="text-white/80 text-lg">Review and assess skill proofs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left: Pending List */}
            <div className="glass-strong rounded-3xl p-6 shadow-glass">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Pending Validation</h2>
              {proofsLoading ? (
                <div className="text-center py-8">
                  <div className="inline-block h-8 w-8 border-4 border-white/20 border-t-primary rounded-full animate-spin"></div>
                  <p className="text-white/70 mt-2">Loading...</p>
                </div>
              ) : proofs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4 animate-float">📋</div>
                  <p className="text-white/60">No pending proofs</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {proofs.map((proof, index) => (
                    <div 
                      key={proof.id} 
                      onClick={() => setSelectedProof(proof.id)} 
                      className={`p-4 rounded-2xl cursor-pointer transition-all ${
                        selectedProof === proof.id 
                          ? 'glass-strong shadow-glow border-2 border-primary' 
                          : 'glass hover:glass-strong'
                      }`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-white font-bold text-lg">Proof #{proof.id}</p>
                          <p className="text-sm text-white/60 mt-1">
                            Course #{proof.courseId} · Challenge #{proof.challengeId}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-gradient-purple rounded-full text-xs font-bold text-white shadow-glow">
                          Pending
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Validation Form */}
            <div className="glass-strong rounded-3xl shadow-glass-lg overflow-hidden">
              <div className="bg-gradient-purple p-8">
                <h2 className="text-3xl font-display font-black text-white">Validation Action</h2>
              </div>

              <form onSubmit={handleValidate} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Proof ID</label>
                  <input 
                    type="number" 
                    value={selectedProof} 
                    onChange={(e) => setSelectedProof(parseInt(e.target.value))} 
                    className="w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">Validation Status</label>
                  <select 
                    value={validationStatus} 
                    onChange={(e) => setValidationStatus(parseInt(e.target.value))} 
                    className="w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all"
                  >
                    <option value={1}>✓ Approved</option>
                    <option value={2}>✗ Rejected</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">Score (0-100)</label>
                  <input 
                    type="number" 
                    min="0" 
                    max="100" 
                    value={newScore} 
                    onChange={(e) => setNewScore(parseInt(e.target.value))} 
                    className="w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all" 
                  />
                  <p className="text-xs text-white/50 mt-2">🔒 Will be encrypted</p>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading || selectedProof === 0} 
                  className="w-full py-4 bg-gradient-purple rounded-2xl font-bold text-white shadow-glow hover:shadow-glow-cyan transition-all btn-glass disabled:opacity-50"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isLoading ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Validating...</span>
                      </>
                    ) : (
                      <>
                        <span>✓</span>
                        <span>Submit Validation</span>
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
