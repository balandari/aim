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
        // Warm Editorial palette: aged wood, warm metals, Oklahoma red earth
        earth: {
          DEFAULT: "#9E4A2F", // Oklahoma red earth -- primary accent
          light: "#C2714E",  // Lighter terracotta
          dark: "#7A3621",   // Deep earth
          50: "#FDF5F0",     // Faintest earth tint
          100: "#F7E4D8",    // Light earth wash
          200: "#E8C4B0",    // Warm blush
          300: "#D4A08A",    // Soft terracotta
          400: "#C2714E",    // Light terracotta
          500: "#9E4A2F",    // Oklahoma red earth
          600: "#7A3621",    // Deep earth
          700: "#5C2818",    // Dark earth
          800: "#3E1A10",    // Very dark earth
          900: "#200D08",    // Near black earth
        },
        brass: {
          DEFAULT: "#B08D57", // Warm metal / brass -- secondary accent
          light: "#CBB07E",   // Light brass
          dark: "#8A6E3E",    // Dark brass
          50: "#FBF7EE",      // Faintest brass tint
          100: "#F2EBDA",     // Light brass wash
          200: "#DFCEA8",     // Pale brass
          300: "#CBB07E",     // Light brass
          400: "#B08D57",     // Brass
          500: "#8A6E3E",     // Dark brass
          600: "#6B5530",     // Deeper brass
          700: "#4D3D22",     // Very dark brass
        },
        cream: {
          DEFAULT: "#FAF6F0", // Primary warm surface
          50: "#FEFDFB",      // Near-white warm
          100: "#FAF6F0",     // Cream
          200: "#F3ECE1",     // Deeper cream
          300: "#E8DDD0",     // Warm tan
          400: "#D4C5B3",     // Sand
        },
        stone: {
          DEFAULT: "#6B5D52", // Warm neutral -- body text
          50: "#FAF6F0",      // Maps to cream for surface
          100: "#F3ECE1",     // Light warm gray
          200: "#E8DDD0",     // Warm light gray
          300: "#D4C5B3",     // Warm medium light
          400: "#A89888",     // Warm medium gray
          500: "#8A7B6C",     // Warm gray
          600: "#6B5D52",     // Body text color
          700: "#524840",     // Dark warm gray
          800: "#3A332E",     // Very dark warm
          900: "#231F1B",     // Near black warm
          950: "#15120F",     // Deepest warm black
        },
      },
      fontFamily: {
        display: ["var(--font-serif-display)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Major-third scale (1.250 ratio) from 16px base
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
        18: "4.5rem",  // 72px
        22: "5.5rem",  // 88px
        26: "6.5rem",  // 104px
        30: "7.5rem",  // 120px
      },
      borderRadius: {
        DEFAULT: "0.5rem",   // 8px -- token corner.radius lower bound
        lg: "0.625rem",      // 10px
        xl: "0.75rem",       // 12px -- token corner.radius upper bound
      },
      boxShadow: {
        warm: "0 1px 3px 0 rgba(107, 93, 82, 0.08), 0 1px 2px -1px rgba(107, 93, 82, 0.08)",
        "warm-md": "0 4px 6px -1px rgba(107, 93, 82, 0.08), 0 2px 4px -2px rgba(107, 93, 82, 0.06)",
        "warm-lg": "0 10px 15px -3px rgba(107, 93, 82, 0.08), 0 4px 6px -4px rgba(107, 93, 82, 0.04)",
        "warm-xl": "0 20px 25px -5px rgba(107, 93, 82, 0.08), 0 8px 10px -6px rgba(107, 93, 82, 0.04)",
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
