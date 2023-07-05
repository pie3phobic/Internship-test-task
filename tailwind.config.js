module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-950": "#0F172A",
        "gray-950": "#414B5C",
        "purple-accent": "#6366F1",
        "dark-gray": "#0C0813",
        "special-gray": "#1A1820",
        "lime-accent": "#9FC86A",
        "yellow-accent": "#FBD34D",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
