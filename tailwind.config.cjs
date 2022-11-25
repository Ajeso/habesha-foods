/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "rose-wood": "#5B0017",
      white: "#FFFFFF",
      "sheen-gold": "#CC9D2F",
      black: "#0000",
      "space-cadet": "#243054",
      "banana-mania": "#FFE9B6",
      "gray-light": "#d3dce6",
      "dark-cyan": "#00646D",
    },
    extend: {
      //   fontFamily: {
      //     monospace: ["Xanh Mono", ...defaultTheme.fontFamily.mono],
      //   },
    },
  },
  plugins: [],
};
