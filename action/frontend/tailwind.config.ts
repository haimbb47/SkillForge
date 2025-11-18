import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          bg: "rgba(255, 255, 255, 0.1)",
          border: "rgba(255, 255, 255, 0.18)",
          light: "rgba(255, 255, 255, 0.25)",
          dark: "rgba(0, 0, 0, 0.1)",
        },
        primary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        secondary: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
          dark: "#0891B2",
        },
        accent: {
          DEFAULT: "#EC4899",
          light: "#F472B6",
          dark: "#DB2777",
        },
        success: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 100%)",
        "gradient-purple": "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
        "gradient-cyan": "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
        "gradient-soft": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-lg": "0 8px 32px 0 rgba(31, 38, 135, 0.5)",
        glow: "0 0 20px rgba(139, 92, 246, 0.5)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.5)",
        "glow-pink": "0 0 20px rgba(236, 72, 153, 0.5)",
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
