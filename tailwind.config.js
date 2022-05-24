module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "red",
          secondary: "#f6d860",
          accent: "#a991f7",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },

      "cupcake",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
