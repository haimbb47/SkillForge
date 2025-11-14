"use client";

import { useState } from "react";
import WalletGuard from "@/components/WalletGuard";
import { useFhevm } from "@/fhevm/useFhevm";
import { useMetaMaskEthersSigner } from "@/hooks/metamask/useMetaMaskEthersSigner";
import { useInMemoryStorage } from "@/hooks/useInMemoryStorage";
import { useSkillForge } from "@/hooks/useSkillForge";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3" as `0x${string}`;

export default function SubmitProofPage() {
  const { storage } = useInMemoryStorage();
  const { provider, chainId, ethersSigner, ethersReadonlyProvider, initialMockChains, isConnected } = useMetaMaskEthersSigner();
  const { instance: fhevmInstance } = useFhevm({ provider, chainId, initialMockChains, enabled: isConnected });
  const { submitProof, message, isLoading } = useSkillForge({
    instance: fhevmInstance,
    fhevmDecryptionSignatureStorage: storage,
    contractAddress: CONTRACT_ADDRESS,
    ethersSigner,
    ethersReadonlyProvider,
    chainId,
  });

  const [formData, setFormData] = useState({
    courseId: 1,
    challengeId: 1,
    proofContent: "",
    score: 85,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mockCID = `Qm${Math.random().toString(36).substring(2, 15)}`;
    await submitProof(formData.courseId, formData.challengeId, mockCID, formData.score);
  };

  return (
    <WalletGuard>
      <div className="min-h-[calc(100vh-5rem)] py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="h-1 w-8 bg-gradient-cyan rounded-full"></div>
              <span className="text-5xl animate-float">📝</span>
              <div className="h-1 w-8 bg-gradient-cyan rounded-full"></div>
            </div>
            <h1 className="text-5xl font-display font-black mb-3">
              <span className="gradient-text">Submit Proof</span>
            </h1>
            <p className="text-white/80 text-lg">Showcase your skill achievements and get validated</p>
          </div>

          <div className="glass-strong rounded-3xl shadow-glass-lg overflow-hidden">
            <div className="bg-gradient-cyan p-8">
              <h2 className="text-3xl font-display font-black text-white">Proof Details</h2>
              <p className="text-white/80 mt-2">✨ Score will be encrypted</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Course ID <span className="text-accent">*</span></label>
                  <input type="number" required min="1" value={formData.courseId} onChange={(e) => setFormData({ ...formData, courseId: parseInt(e.target.value) })} className="w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Challenge ID <span className="text-accent">*</span></label>
                  <input type="number" required min="1" value={formData.challengeId} onChange={(e) => setFormData({ ...formData, challengeId: parseInt(e.target.value) })} className="w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">Proof Content <span className="text-accent">*</span></label>
                <textarea required value={formData.proofContent} onChange={(e) => setFormData({ ...formData, proofContent: e.target.value })} placeholder="Describe your completed tasks and achievements..." rows={6} className="w-full px-4 py-3 glass rounded-2xl text-white placeholder-white/40 focus:outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">Self-Assessment Score (0-100) <span className="text-accent">*</span></label>
                <input type="number" required min="0" max="100" value={formData.score} onChange={(e) => setFormData({ ...formData, score: parseInt(e.target.value) })} className="w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all" />
                <p className="text-xs text-white/50 mt-2">🔒 Will be encrypted with FHE</p>
              </div>

              <button type="submit" disabled={isLoading} className="w-full py-4 bg-gradient-cyan rounded-2xl font-bold text-white shadow-glow-cyan hover:shadow-glow transition-all btn-glass disabled:opacity-50">
                <span className="flex items-center justify-center space-x-2">
                  {isLoading ? (<><div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div><span>Submitting...</span></>) : (<><span>📝</span><span>Submit Proof</span></>)}
                </span>
              </button>

              {message && (<div className="glass-dark rounded-2xl p-4 border border-white/10"><p className="text-sm text-white/90 break-all">{message}</p></div>)}
            </form>
          </div>
        </div>
      </div>
    </WalletGuard>
  );
}
