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
        // Bold giveaway palette - excitement and energy
        primary: {
          DEFAULT: "#DC143C", // Crimson red - excitement, FREE
          light: "#FF6B6B", // Lighter red
          dark: "#B91C1C", // Dark red
        },
        secondary: {
          DEFAULT: "#1E3A8A", // Navy blue - trust, authority
          light: "#3B82F6", // Lighter blue
          dark: "#1E293B", // Darker navy
        },
        accent: {
          DEFAULT: "#FCD34D", // Yellow - urgency, highlights
          light: "#FEF08A", // Light yellow
          dark: "#EAB308", // Darker yellow
        },
        neutral: {
          50: "#FFFFFF", // Pure white
          100: "#F8FAFC", // Off white
          200: "#E2E8F0", // Light gray
          300: "#CBD5E1", // Medium light gray
          400: "#94A3B8", // Medium gray
          500: "#64748B", // Gray
          600: "#475569", // Dark gray
          700: "#334155", // Darker gray
          800: "#1E293B", // Very dark gray
          900: "#0F172A", // Almost black
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"], // Classic, timeless for branding
        display: ["Georgia", "Times New Roman", "serif"], // Elegant headlines
        sans: ["Segoe UI", "Helvetica Neue", "system-ui", "sans-serif"], // Modern, clean
      },
      fontSize: {
        // Minimum 18px for readability
        base: ["18px", { lineHeight: "1.6" }],
        lg: ["20px", { lineHeight: "1.6" }],
        xl: ["22px", { lineHeight: "1.5" }],
        "2xl": ["26px", { lineHeight: "1.4" }],
        "3xl": ["32px", { lineHeight: "1.3" }],
        "4xl": ["40px", { lineHeight: "1.2" }],
        "5xl": ["48px", { lineHeight: "1.1" }],
      },
      spacing: {
        // Generous whitespace for readability and visual hierarchy
        section: "32px", // space-8
        content: "24px", // space-6
      },
      borderRadius: {
        // Subtle, not excessive
        DEFAULT: "0.25rem", // 4px - subtle
        lg: "0.375rem", // 6px
        xl: "0.5rem", // 8px
      },
    },
  },
  plugins: [],
};

export default config;
