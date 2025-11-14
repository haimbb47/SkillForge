"use client";

import WalletGuard from "@/components/WalletGuard";
import { useMetaMaskEthersSigner } from "@/hooks/metamask/useMetaMaskEthersSigner";
import { useFhevm } from "@/fhevm/useFhevm";
import { useInMemoryStorage } from "@/hooks/useInMemoryStorage";
import { useBadges } from "@/hooks/useBadges";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3" as `0x${string}`;

export default function BadgesPage() {
  const { storage } = useInMemoryStorage();
  const { provider, chainId, ethersSigner, ethersReadonlyProvider, initialMockChains, isConnected, accounts } = useMetaMaskEthersSigner();
  const { instance: fhevmInstance } = useFhevm({ provider, chainId, initialMockChains, enabled: isConnected });
  const { badges, isLoading } = useBadges({ contractAddress: CONTRACT_ADDRESS, ethersReadonlyProvider, instance: fhevmInstance, ethersSigner, fhevmDecryptionSignatureStorage: storage, chainId, userAddress: accounts[0] });

  return (
    <WalletGuard>
      <div className="min-h-[calc(100vh-5rem)] py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="h-1 w-8 bg-gradient-purple rounded-full"></div>
              <span className="text-5xl animate-float">🏆</span>
              <div className="h-1 w-8 bg-gradient-purple rounded-full"></div>
            </div>
            <h1 className="text-5xl font-display font-black mb-3">
              <span className="gradient-text">My Badges</span>
            </h1>
            <p className="text-white/80 text-lg">Your forged achievement badges</p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-12 w-12 border-4 border-white/20 border-t-primary rounded-full animate-spin"></div>
              <p className="text-white/70 mt-4">Loading...</p>
            </div>
          ) : badges.length === 0 ? (
            <div className="text-center py-16">
              <div className="glass-strong rounded-3xl p-12 max-w-md mx-auto">
                <div className="text-7xl mb-6 animate-float">🏅</div>
                <h3 className="text-2xl font-bold text-white mb-3">No Badges Yet</h3>
                <p className="text-white/60">Complete course challenges to claim badges</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge, index) => (
                <div key={badge.id} className="glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-center mb-4">
                    <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-purple text-5xl mb-4 shadow-glow transform group-hover:scale-110 transition-transform animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                      🏆
                    </div>
                    <h3 className="text-2xl font-display font-black gradient-text">Badge #{badge.id}</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="glass-dark rounded-xl p-3">
                      <p className="text-white/60 text-xs mb-1">Course</p>
                      <p className="text-white font-bold">#{badge.courseId}</p>
                    </div>
                    <div className="glass-dark rounded-xl p-3">
                      <p className="text-white/60 text-xs mb-1">Owner</p>
                      <p className="text-white font-mono text-xs">{badge.earner ? `${badge.earner.slice(0, 16)}...` : 'Unknown'}</p>
                    </div>
                    <div className="glass-dark rounded-xl p-3">
                      <p className="text-white/60 text-xs mb-1">Claimed At</p>
                      <p className="text-white">{badge.claimedAt ? new Date(badge.claimedAt * 1000).toLocaleDateString('en-US') : 'Unknown'}</p>
                    </div>
                    {badge.decryptedScore && (
                      <div className="glass-dark rounded-xl p-3 border border-primary/30">
                        <p className="text-primary font-bold text-lg">💎 Total Score: {badge.decryptedScore.toString()}</p>
                      </div>
                    )}
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
