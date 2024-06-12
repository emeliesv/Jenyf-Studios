/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        jenyfPrimaryBrand: "#E2E3D6",
        jenyfPrimaryBackground: "#F6F6EF",
        jenyfNeutralLight: "#FFFFFF",
        jenyfNeutralDark: "#3C3B36",
        jenyfError: "#D72445",
      },
      textColor: {
        jenyfPrimaryText: "#3C3B36",
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
        'xxxs': '0.5rem',  // 8px
      },
    },
  },
  plugins: [],
};
