/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        "pure-blue": "#10141E",
        "graish-blue": "#5A698F",
        "semi-dark-blue": "#161D2F",
        "pure-white": "#FFFFFF",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        // Headings
        "heading-l": ["32px", { lineHeight: "1.25", fontWeight: "300" }], // Outfit Light
        "heading-m": ["24px", { lineHeight: "1.25", fontWeight: "300" }], // Outfit Light
        "heading-s": ["24px", { lineHeight: "1.25", fontWeight: "500" }], // Outfit Medium
        "heading-xs": ["18px", { lineHeight: "1.25", fontWeight: "500" }], // Outfit Medium

        // Body text
        "body-m": ["15px", { lineHeight: "1.6", fontWeight: "300" }], // Outfit Light
        "body-s": ["13px", { lineHeight: "1.6", fontWeight: "300" }], // Outfit Light
      },
    },
  },
  plugins: [],
};
