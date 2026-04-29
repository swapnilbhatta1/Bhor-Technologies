import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        neptune: {
          50: "#ebecff",
          100: "#daddff",
          200: "#b5baff",
          300: "#868fff",
          400: "#6974ff",
          500: "#525AFF",
          600: "#3d42e5",
          700: "#2d30bf",
          800: "#25279c",
          900: "#22257d",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
        serif: ["var(--font-source-serif)", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(82, 90, 255, 0.12)",
        panel: "0 18px 40px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        "speak-glow":
          "radial-gradient(circle at center, rgba(82, 90, 255, 0.4) 0%, rgba(82, 90, 255, 0.1) 40%, rgba(10, 13, 23, 0) 70%)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
