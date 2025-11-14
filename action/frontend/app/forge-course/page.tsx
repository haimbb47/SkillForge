"use client";

import { useState } from "react";
import WalletGuard from "@/components/WalletGuard";
import { useFhevm } from "@/fhevm/useFhevm";
import { useMetaMaskEthersSigner } from "@/hooks/metamask/useMetaMaskEthersSigner";
import { useInMemoryStorage } from "@/hooks/useInMemoryStorage";
import { useSkillForge } from "@/hooks/useSkillForge";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3" as `0x${string}`;

export default function ForgeCoursePage() {
  const { storage } = useInMemoryStorage();
  const { provider, chainId, ethersSigner, ethersReadonlyProvider, initialMockChains, isConnected } = useMetaMaskEthersSigner();
  const { instance: fhevmInstance } = useFhevm({ provider, chainId, initialMockChains, enabled: isConnected });
  const { forgeCourse, message, isLoading } = useSkillForge({
    instance: fhevmInstance,
    fhevmDecryptionSignatureStorage: storage,
    contractAddress: CONTRACT_ADDRESS,
    ethersSigner,
    ethersReadonlyProvider,
    chainId,
  });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Programming",
    difficulty: "Beginner",
    totalChallenges: 5,
    duration: "30",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mockCID = `Qm${Math.random().toString(36).substring(2, 15)}`;
    await forgeCourse(mockCID, formData.totalChallenges);
  };

  return (
    <WalletGuard>
      <div className="min-h-[calc(100vh-5rem)] py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="h-1 w-8 bg-gradient-purple rounded-full"></div>
              <span className="text-5xl animate-float">✨</span>
              <div className="h-1 w-8 bg-gradient-purple rounded-full"></div>
            </div>
            <h1 className="text-5xl font-display font-black mb-3">
              <span className="gradient-text">Forge Course</span>
            </h1>
            <p className="text-white/80 text-lg">
              Create new skill training courses with challenges
            </p>
          </div>

          {/* Form Card */}
          <div className="glass-strong rounded-3xl shadow-glass-lg overflow-hidden">
            <div className="bg-gradient-purple p-8">
              <h2 className="text-3xl font-display font-black text-white">Course Information</h2>
              <p className="text-white/80 mt-2">
                ✨ All data will be encrypted with FHEVM
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Course Title <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Full-Stack Developer Training"
                  className="w-full px-4 py-3 glass rounded-2xl text-white placeholder-white/40 focus:outline-none transition-all"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Course Description <span className="text-accent">*</span>
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe course content and objectives..."
                  rows={4}
                  className="w-full px-4 py-3 glass rounded-2xl text-white placeholder-white/40 focus:outline-none transition-all"
                />
              </div>

              {/* Category and Difficulty */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all"
                  >
                    <option value="Programming">💻 Programming</option>
                    <option value="Design">🎨 Design</option>
                    <option value="Business">💼 Business</option>
                    <option value="Data Science">📊 Data Science</option>
                    <option value="Blockchain">⛓️ Blockchain</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={formData.difficulty}
                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                    className="w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all"
                  >
                    <option value="Beginner">⭐ Beginner</option>
                    <option value="Intermediate">⭐⭐ Intermediate</option>
                    <option value="Advanced">⭐⭐⭐ Advanced</option>
                    <option value="Expert">💎 Expert</option>
                  </select>
                </div>
              </div>

              {/* Challenges and Duration */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Total Challenges <span className="text-accent">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.totalChallenges}
                    onChange={(e) => setFormData({ ...formData, totalChallenges: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 glass rounded-2xl text-white focus:outline-none transition-all"
                  />
                  <p className="text-xs text-white/50 mt-2">
                    🔒 Will be encrypted with FHE
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Duration (days)
                  </label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="30"
                    className="w-full px-4 py-3 glass rounded-2xl text-white placeholder-white/40 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Info Box */}
              <div className="glass-dark rounded-2xl p-5 border border-primary/30">
                <div className="flex items-start space-x-3">
                  <span className="text-3xl">💡</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-primary mb-2">Encryption Info</h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Challenge count will be stored on-chain using FHEVM homomorphic encryption. 
                      Data can be computed in encrypted state but cannot be viewed by unauthorized parties.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-purple rounded-2xl font-bold text-white shadow-glow hover:shadow-glow-cyan transition-all btn-glass disabled:opacity-50"
              >
                <span className="flex items-center justify-center space-x-2">
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Forging...</span>
                    </>
                  ) : (
                    <>
                      <span>✨</span>
                      <span>Start Forging</span>
                    </>
                  )}
                </span>
              </button>

              {/* Status Message */}
              {message && (
                <div className="glass-dark rounded-2xl p-4 border border-white/10">
                  <p className="text-sm text-white/90 break-all">
                    {message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </WalletGuard>
  );
}
