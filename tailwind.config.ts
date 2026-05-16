import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Accent colors (theme-independent) ----
        earth: {
          DEFAULT: "#9E4A2F",
          light: "#C2714E",
          dark: "#7A3621",
          50: "#FDF5F0",
          100: "#F7E4D8",
          200: "#E8C4B0",
          300: "#D4A08A",
          400: "#C2714E",
          500: "#9E4A2F",
          600: "#7A3621",
          700: "#5C2818",
          800: "#3E1A10",
          900: "#200D08",
        },
        brass: {
          DEFAULT: "#B08D57",
          light: "#CBB07E",
          dark: "#8A6E3E",
          50: "#FBF7EE",
          100: "#F2EBDA",
          200: "#DFCEA8",
          300: "#CBB07E",
          400: "#B08D57",
          500: "#8A6E3E",
          600: "#6B5530",
          700: "#4D3D22",
        },

        // ---- Theme-dependent colors (CSS custom properties) ----
        cream: {
          DEFAULT: "rgb(var(--cream) / <alpha-value>)",
          50: "rgb(var(--cream-50) / <alpha-value>)",
          100: "rgb(var(--cream-100) / <alpha-value>)",
          200: "rgb(var(--cream-200) / <alpha-value>)",
          300: "rgb(var(--cream-300) / <alpha-value>)",
          400: "rgb(var(--cream-400) / <alpha-value>)",
        },
        stone: {
          DEFAULT: "rgb(var(--stone) / <alpha-value>)",
          50: "rgb(var(--stone-50) / <alpha-value>)",
          100: "rgb(var(--stone-100) / <alpha-value>)",
          200: "rgb(var(--stone-200) / <alpha-value>)",
          300: "rgb(var(--stone-300) / <alpha-value>)",
          400: "rgb(var(--stone-400) / <alpha-value>)",
          500: "rgb(var(--stone-500) / <alpha-value>)",
          600: "rgb(var(--stone-600) / <alpha-value>)",
          700: "rgb(var(--stone-700) / <alpha-value>)",
          800: "rgb(var(--stone-800) / <alpha-value>)",
          900: "rgb(var(--stone-900) / <alpha-value>)",
          950: "rgb(var(--stone-950) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-serif-display)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.6" }],
        base: ["16px", { lineHeight: "1.7" }],
        lg: ["18px", { lineHeight: "1.7" }],
        xl: ["20px", { lineHeight: "1.6" }],
        "2xl": ["25px", { lineHeight: "1.4" }],
        "3xl": ["31px", { lineHeight: "1.3" }],
        "4xl": ["39px", { lineHeight: "1.2" }],
        "5xl": ["49px", { lineHeight: "1.1" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.625rem",
        xl: "0.75rem",
      },
      boxShadow: {
        warm: "0 1px 3px 0 rgba(107, 93, 82, 0.08), 0 1px 2px -1px rgba(107, 93, 82, 0.08)",
        "warm-md":
          "0 4px 6px -1px rgba(107, 93, 82, 0.08), 0 2px 4px -2px rgba(107, 93, 82, 0.06)",
        "warm-lg":
          "0 10px 15px -3px rgba(107, 93, 82, 0.08), 0 4px 6px -4px rgba(107, 93, 82, 0.04)",
        "warm-xl":
          "0 20px 25px -5px rgba(107, 93, 82, 0.08), 0 8px 10px -6px rgba(107, 93, 82, 0.04)",
      },
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
