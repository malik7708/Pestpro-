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
        brand: {
          green: "#2f6b4f",
          "green-light": "#4b8a67",
          "green-dark": "#254f3c",
          "green-50": "#f5f8f5",
          "green-100": "#e4eee6",
          navy: "#22313d",
          "navy-light": "#314653",
          gold: "#b79a63",
          "gold-light": "#cab382",
        },
      },
      fontFamily: {
        display: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
        body: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        "brand-sm": "0 8px 20px rgba(47, 107, 79, 0.10)",
        brand: "0 12px 30px rgba(47, 107, 79, 0.14)",
        "brand-lg": "0 18px 42px rgba(47, 107, 79, 0.18)",
        card: "0 10px 30px rgba(15, 23, 42, 0.06)",
        "card-hover": "0 18px 40px rgba(15, 23, 42, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
