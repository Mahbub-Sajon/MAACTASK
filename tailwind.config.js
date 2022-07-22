/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        'manrope': 'Manrope',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0052CC",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
