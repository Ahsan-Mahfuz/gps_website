import type { Config } from "tailwindcss";

/**
 * All colors are driven by CSS variables (see globals.css).
 * Switching the `data-theme` attribute on <html> flips the whole palette
 * between the black (default) and white themes — no class churn needed.
 */
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // surfaces
        background: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        elevated: "rgb(var(--elevated) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        // brand
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
        // text
        foreground: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        faint: "rgb(var(--faint) / <alpha-value>)",
        // lines / inputs
        line: "rgb(var(--line) / <alpha-value>)",
        input: "rgb(var(--input-bg) / <alpha-value>)",
        "input-border": "rgb(var(--input-border) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
      },
      fontFamily: {
        // Anton — display / headings
        anton: ["var(--font-anton)", "Impact", "sans-serif"],
        // Inria Sans — body / descriptions
        inria: ["var(--font-inria)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "scale-in": "scale-in 0.25s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
