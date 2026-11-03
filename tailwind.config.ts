import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: "#073B78",
          deep: "#042347",
          abyss: "#02142B",
          medium: "#0A4D9B",
          bright: "#156CD4",
          light: "#EBF3FA",
          tint: "#F4F8FC",
        },
        nature: {
          DEFAULT: "#39A96B",
          emerald: "#2E8856",
          leaf: "#44C27C",
          soft: "#EAF7F0",
          tint: "#F2FAF5",
        },
        surface: {
          pure: "#FFFFFF",
          ice: "#F7FAFD",
          subtle: "#F1F5F9",
          border: "#E2E8F0",
          "border-dark": "rgba(255, 255, 255, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      animation: {
        "float-gentle": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ripple": "ripple 3s cubic-bezier(0, 0.2, 0.8, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

