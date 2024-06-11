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
        jenyfPrimaryBackground: "#FFFFFF",
        jenyfNeutralLight: "#EDECEA",
        jenyfNeutralDark: "#3C3B36",
        jenyfError: "#D72445",
      },
      textColor: {
        jenyfPrimaryText: "#3C3B36",
      },
    },
  },
  plugins: [],
};
