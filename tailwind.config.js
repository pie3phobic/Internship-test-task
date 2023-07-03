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
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
