import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        paper: "#F6F8FA",
        accent: "#F59E0B",
        ink: "#0F172A",
        mist: "#E2E8F0",
        steel: "#64748B",
        line: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "2px",
        md: "4px",
        lg: "4px",
        xl: "4px",
        "2xl": "4px",
        "3xl": "4px",
      },
      maxWidth: {
        site: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
