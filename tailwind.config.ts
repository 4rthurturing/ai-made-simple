import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#E8F0E9",
          100: "#D1E1D3",
          200: "#A3C3A7",
          300: "#75A57B",
          400: "#5C9164",
          500: "#4A7C59",
          600: "#3D6649",
          700: "#2D5A3D",
          800: "#1E3D29",
          900: "#0F1F15",
        },
        gold: {
          400: "#E0B84D",
          500: "#D4A843",
          600: "#B8903A",
        },
        sky: {
          500: "#5B9BD5",
        },
        warm: {
          white: "#FAFAF5",
          grey: "#6B7280",
        },
      },
      fontSize: {
        "body": ["20px", { lineHeight: "1.7" }],
        "body-lg": ["22px", { lineHeight: "1.7" }],
        "h1": ["42px", { lineHeight: "1.2" }],
        "h2": ["32px", { lineHeight: "1.3" }],
        "h3": ["24px", { lineHeight: "1.3" }],
      },
      borderRadius: {
        "card": "16px",
        "btn": "12px",
      },
      maxWidth: {
        "content": "800px",
      },
    },
  },
  plugins: [],
};

export default config;
