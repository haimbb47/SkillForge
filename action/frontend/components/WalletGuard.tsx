"use client";

import { ReactNode } from "react";
import { useMetaMaskEthersSigner } from "@/hooks/metamask/useMetaMaskEthersSigner";

export default function WalletGuard({ children }: { children: ReactNode }) {
  const { isConnected, connect } = useMetaMaskEthersSigner();

  if (!isConnected) {
    return (
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="glass-strong rounded-3xl p-10 shadow-glass-lg text-center">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-purple opacity-5 rounded-3xl blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-purple text-5xl mb-6 shadow-glow animate-float">
                🔗
              </div>
              <h2 className="text-3xl font-display font-black mb-3">
                <span className="gradient-text">Connect Wallet</span>
              </h2>
              <div className="h-1 w-16 bg-gradient-purple mx-auto mb-6 rounded-full"></div>
              <p className="text-white/80 mb-8 leading-relaxed">
                Please connect your MetaMask wallet to access SkillForge
              </p>
              
              <button
                onClick={connect}
                className="w-full py-4 glass-strong rounded-2xl font-bold shadow-glow hover:shadow-glow-cyan transition-all btn-glass group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>🚀</span>
                  <span>Connect MetaMask</span>
                </span>
              </button>
              
              <div className="mt-8 glass-dark rounded-2xl p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💡</span>
                  <p className="text-sm text-white/70 text-left">
                    Make sure you have MetaMask browser extension installed
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="mt-8 flex items-center justify-center space-x-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20"></div>
                <div className="flex space-x-1">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <div className="h-1.5 w-1.5 bg-secondary rounded-full"></div>
                  <div className="h-1.5 w-1.5 bg-accent rounded-full"></div>
                </div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
