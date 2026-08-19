import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ff6a00",
          50: "#fff4ec",
          100: "#ffe6d3",
          200: "#ffc79f",
          300: "#ffa365",
          400: "#ff8433",
          500: "#ff6a00",
          600: "#e35e00",
          700: "#bc4c00",
          800: "#953c00",
          900: "#7a3200"
        },
        ink: {
          DEFAULT: "#1a1a1a",
          soft: "#4a4a4a",
          muted: "#767676"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      maxWidth: {
        content: "1280px"
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        cardHover: "0 4px 14px rgba(0,0,0,0.10)"
      }
    }
  },
  plugins: []
};

export default config;
