"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMetaMaskEthersSigner } from "@/hooks/metamask/useMetaMaskEthersSigner";

export default function Navigation() {
  const pathname = usePathname();
  const { accounts, isConnected, connect, chainId } = useMetaMaskEthersSigner();

  const navItems = [
    { href: "/", label: "Dashboard", icon: "🏠" },
    { href: "/forge-course", label: "Forge", icon: "✨" },
    { href: "/submit-proof", label: "Submit", icon: "📝" },
    { href: "/validate", label: "Validate", icon: "✓" },
    { href: "/validated", label: "Validated", icon: "✔" },
    { href: "/claim-badge", label: "Claim", icon: "🎖" },
    { href: "/badges", label: "Badges", icon: "🏆" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-strong shadow-glass">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-purple rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex h-12 w-12 items-center justify-center glass-strong rounded-2xl shadow-glow">
                <span className="text-2xl font-bold gradient-text">S</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-display font-bold gradient-text">
                SkillForge
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-2 glass rounded-full px-2 py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all ${
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-purple rounded-full shadow-glow"></div>
                  )}
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-3">
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <div className="hidden md:flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <div className="h-2 w-2 rounded-full bg-success animate-glow-pulse"></div>
                  <span className="text-sm font-mono text-white/90">
                    Chain #{chainId}
                  </span>
                </div>
                <div className="glass-strong rounded-full px-4 py-2 shadow-glow">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-purple flex items-center justify-center text-sm font-bold">
                      {accounts[0]?.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="font-mono text-sm font-medium hidden md:block">
                      {accounts[0]?.slice(0, 6)}...{accounts[0]?.slice(-4)}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={connect}
                className="relative group px-6 py-3 glass-strong rounded-full font-semibold shadow-glow hover:shadow-glow-cyan transition-all btn-glass"
              >
                <span className="flex items-center space-x-2">
                  <span>🔗</span>
                  <span>Connect Wallet</span>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-2 pb-3 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center space-x-1 px-4 py-2 rounded-full font-medium whitespace-nowrap text-sm transition-all ${
                  isActive
                    ? "text-white glass-strong shadow-glow"
                    : "text-white/70 glass"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
