module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      desktop: "1024px",
    },
    colors: {
      "light-gray": "hsl(217, 12%, 63%)",
      "normal-white": "hsl(0, 0%, 100%)",
      "medium-gray": "hsl(216, 12%, 54%)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 12%, 8%)",
      "normal-orange": "hsl(25, 97%, 53%)",

      "number-button": "#323c49",
      card: "hsl(213, 20%, 18%)",
      body: "#121417",
      "text-button": "#7c8798",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
