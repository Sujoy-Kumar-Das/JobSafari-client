/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        defaultTheme: {
          primary: "#007BFF",
          secondary: "#666666",
          accent: "#FFA500",
          neutral: "#4CAF50",
          "base-100": "#ffffff",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
