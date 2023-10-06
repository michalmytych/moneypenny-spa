module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: 'hsl(229, 31%, 21%)'
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
