"use client";

import { useFhevm } from "@/fhevm/useFhevm";
import { useMetaMaskEthersSigner } from "@/hooks/metamask/useMetaMaskEthersSigner";
import Link from "next/link";

export default function Home() {
  const { chainId, accounts, isConnected } = useMetaMaskEthersSigner();
  const {
    status: fhevmStatus,
    error: fhevmError,
  } = useFhevm({
    provider: typeof window !== "undefined" ? window.ethereum : undefined,
    chainId,
    initialMockChains: { 31337: "http://localhost:8545" },
    enabled: isConnected,
  });

  const actions = [
    {
      title: "Forge Course",
      description: "Create new skill training courses",
      icon: "✨",
      href: "/forge-course",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Submit Proof",
      description: "Showcase your skill achievements",
      icon: "📝",
      href: "/submit-proof",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Validate Proofs",
      description: "Review skill proofs",
      icon: "✓",
      href: "/validate",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "My Badges",
      description: "View earned achievements",
      icon: "🏆",
      href: "/badges",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const stats = [
    { label: "Forged Courses", value: "0", icon: "✨" },
    { label: "Completed Challenges", value: "0", icon: "⚡" },
    { label: "Earned Badges", value: "0", icon: "🎖" },
    { label: "Total Score", value: "--", icon: "💎" },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-6 glass rounded-full px-6 py-3 animate-slide-up">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
            <span className="text-sm font-medium">SYSTEM ONLINE</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 animate-slide-up">
            <span className="gradient-text">SkillForge</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-1 w-16 bg-gradient-purple rounded-full"></div>
            <div className="h-1 w-1 rounded-full bg-white"></div>
            <div className="h-1 w-16 bg-gradient-cyan rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Decentralized Skill Forging Platform Powered by FHEVM
          </p>
          
          {/* Status Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="glass-strong rounded-full px-6 py-3 shadow-glass">
              <span className="text-sm text-white/70">Chain ID: </span>
              <span className="font-mono font-bold gradient-text">{chainId || "Not Connected"}</span>
            </div>
            <div className="glass-strong rounded-full px-6 py-3 shadow-glass">
              <span className="text-sm text-white/70">FHEVM: </span>
              <span className={`font-bold ${
                fhevmStatus === "ready" ? "text-success" : 
                fhevmStatus === "loading" ? "text-amber-400" : 
                "text-white/50"
              }`}>
                {fhevmStatus === "ready" ? "✓ Ready" : 
                 fhevmStatus === "loading" ? "⏳ Loading" : 
                 "Standby"}
              </span>
            </div>
            {isConnected && (
              <div className="glass-strong rounded-full px-6 py-3 shadow-glow">
                <span className="text-sm text-white/70">Address: </span>
                <span className="font-mono font-bold">
                  {accounts[0]?.slice(0, 6)}...{accounts[0]?.slice(-4)}
                </span>
              </div>
            )}
          </div>

          {fhevmError && (
            <div className="max-w-2xl mx-auto mb-8 glass-dark rounded-2xl p-4 border border-red-400/30">
              <p className="text-sm text-red-300">
                ⚠️ FHEVM Error: {fhevmError.message}
              </p>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 shadow-glass hover:shadow-glass-lg transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {stat.icon}
              </div>
              <div className="text-4xl font-display font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Actions Grid */}
        <div>
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className="group relative glass-card rounded-3xl p-8 shadow-glass hover:shadow-glass-lg transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${action.gradient} text-3xl mb-6 shadow-glow transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {action.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-4">
                    {action.description}
                  </p>
                  <div className="flex items-center text-white font-semibold text-sm">
                    <span>Start</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-3xl p-8 text-center shadow-glass hover:shadow-glass-lg transition-all">
              <div className="text-6xl mb-4 animate-float">🔒</div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Fully Encrypted
              </h3>
              <div className="h-1 w-12 bg-gradient-purple mx-auto mb-4 rounded-full"></div>
              <p className="text-sm text-white/70 leading-relaxed">
                All skill data processed with FHEVM homomorphic encryption
              </p>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center shadow-glass hover:shadow-glass-lg transition-all">
              <div className="text-6xl mb-4 animate-float" style={{ animationDelay: '0.2s' }}>⛓️</div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                On-Chain Forge
              </h3>
              <div className="h-1 w-12 bg-gradient-cyan mx-auto mb-4 rounded-full"></div>
              <p className="text-sm text-white/70 leading-relaxed">
                All badges permanently recorded on blockchain, verifiable
              </p>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center shadow-glass hover:shadow-glass-lg transition-all">
              <div className="text-6xl mb-4 animate-float" style={{ animationDelay: '0.4s' }}>🛡️</div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Smart Validation
              </h3>
              <div className="h-1 w-12 bg-gradient-purple mx-auto mb-4 rounded-full"></div>
              <p className="text-sm text-white/70 leading-relaxed">
                Validators review and score in encrypted state, protecting privacy
              </p>
            </div>
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="mt-16 flex items-center justify-center space-x-3">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/30"></div>
          <div className="flex space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
            <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/30"></div>
        </div>
      </div>
    </div>
  );
}
