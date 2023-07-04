module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  //content: [],
  theme: {
    extend: {
      colors: {
        "blue-950": "#0F172A",
        "gray-950": "#414B5C",
        "purple-accent": "#6366F1",
        "dark-gray": "#0C0813",
        "special-gray": "#1A1820",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
