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
        "content": "1100px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-120% 0" },
          "100%": { backgroundPosition: "120% 0" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "float-slow": "float 8s ease-in-out infinite",
        "gradient-shift": "gradientShift 10s ease infinite",
        "shimmer": "shimmer 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
