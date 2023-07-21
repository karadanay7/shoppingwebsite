const colors = require("tailwindcss/colors");

/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.{md,yml,json,yaml,toml,csv}",
    "./app.vue",
  ],

  theme: {
    extend: {},
    keyframes: {
      "slide-right": {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      "slide-right": "slide-right 0.5s",
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // ...
    animation: false, // Disable the core animation plugin to use custom animation
  },
  plugins: [require("@tailwindcss/typography")],
};
