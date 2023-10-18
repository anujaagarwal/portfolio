/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#01be94",
      secondary: "#9a5bff",
      light: "#fff",
      baseLight: "#f0f1f9", // replace base with some other color name
      standard: "#151515",
      deep: "#111",
      soft: "#212023",
    },
    fontFamily: {
      sans: "Open Sans",
      ubuntu: "Ubuntu",
    },
    extend: {
      spacing: {
        112: "28rem",
        128: "32rem",
        "half-screen": "50vh",
      },
      minHeight: {
        "half-screen": "50vh",
        // "90-screen": "90vh",
      },
      minWidth: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
      },
      screens: {
        xsm: "376px",
      },
    },
  },
  plugins: [],
};
