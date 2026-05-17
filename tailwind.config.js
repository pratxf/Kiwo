/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#DDDAF7",
        "lavender-dark": "#C8C3F0",
        sunshine: "#FFD93D",
        "sunshine-dark": "#F5C518",
        coral: "#F97316",
        brand: "#5B4FD6",
        "brand-dark": "#4A3FC7",
        ink: "#1A1035",
        "ink-soft": "#3D3560",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(91,79,214,0.12)",
        card: "0 8px 32px rgba(26,16,53,0.08)",
        glow: "0 0 40px rgba(91,79,214,0.25)",
      },
      fontFamily: {
        display: ["var(--font-display)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        marquee: "marquee-scroll 28s linear infinite",
        float: "float 5s ease-in-out infinite",
        "float-slow": "float 7s ease-in-out infinite",
        "float-fast": "float 3.5s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
      },
      keyframes: {
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
