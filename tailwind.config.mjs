/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FAF8F4",
        card: "#ECE8E1",
        hover: "#E0DCD4",
        text: "#2F2F2F",
        subtext: "#6F6F6F",
        accent: "#B77F4E",
      },
    },  
  },
  plugins: [],
};
