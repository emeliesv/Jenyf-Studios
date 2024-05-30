/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        jenyfPrimaryBrand: "#E2E3D6",
        jenyfPrimaryBackground: "#EDECEA",
        jenyfNeutralLight: "#FFFFFF",
        jenyfNeutralDark: "#3C3B36",
        jenyfError: "#D72445",
      },
    },
  },
  plugins: [],
};
