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
        cfpmi: {
          marine: "#1B2A7B", // Bleu marine du logo
          sky: "#2AA0E0",    // Bleu ciel du logo
          orange: "#F26A2E", // Orange vif du logo
          red: "#E31E24",    // Rouge dynamique du logo
          dark: "#0F172A",
          muted: "#475569",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(27, 42, 123, 0.1), 0 8px 10px -6px rgba(27, 42, 123, 0.1)',
        'orange-glow': '0 10px 25px -5px rgba(242, 106, 46, 0.25)',
      }
    },
  },
  plugins: [],
};
export default config;

