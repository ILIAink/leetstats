/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": {
          100: "#e0e1ff",
          200: "#c1c4ff",
          300: "#a1a6ff",
          400: "#8289ff",
          500: "#636bff", // Base shade
          600: "#4f56cc",
          700: "#3b4099",
          800: "#282b66",
          900: "#141533",
        },
      },
    },
    container: {
      center: true,
      // padding: "2rem",
    },
  },
  plugins: [],
};
