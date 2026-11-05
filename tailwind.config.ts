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
        // Stellar Water Palette
        canvas: "#F6F8FA",
        navy: {
          DEFAULT: "#0A1F33",
          light: "#142C44",
          deep: "#061424",
          muted: "rgba(10, 31, 51, 0.7)",
        },
        aqua: {
          DEFAULT: "#1FB5D6",
          dark: "#1793AE",
          light: "#47C7E2",
          glow: "rgba(31, 181, 214, 0.25)",
        },
        sky: {
          DEFAULT: "#E6F4F9",
          subtle: "#F0F8FB",
          border: "#D3E9F2",
        },
        // Existing brand tokens maintained
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
        },
        surface: {
          pure: "#FFFFFF",
          ice: "#F6F8FA",
          subtle: "#EFF4F8",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        caps: "0.08em",
        editorial: "0.22em",
      },
      animation: {
        "float-gentle": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
