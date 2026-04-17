import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        sunrise: {
          50: "#FFF9EF",
          100: "#FFF0D6",
          200: "#FFE1AF",
          300: "#FFC683",
          400: "#FEA757",
          500: "#FE7F2D",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(250, 136, 35, 0.12)",
        panel: "0 18px 40px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "sunrise-glow":
          "radial-gradient(circle at center, rgba(254, 198, 131, 0.85) 0%, rgba(254, 127, 45, 0.32) 34%, rgba(255, 255, 255, 0) 68%)",
      },
    },
  },
  plugins: [],
};

export default config;
