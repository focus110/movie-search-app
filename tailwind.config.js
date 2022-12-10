/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#2B3B30",
        "primary-dark": "#353935",
        "btn-primary": "#353935",
        "onyx-grey": "#F7F7F7",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/hero.png')",
        "holding-phone": "url('/src/assets/images/holding-phone.png')",
        "about-abstract": "url('/src/assets/images/abstract-bg.png')",
      },
    },
  },
  plugins: [],
};
