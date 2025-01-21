/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4b5563",  // Kleine Buttons z.B. unten links
          "primary-content": "#E9FBFF", // weiß - Schrift in kleinen Buttons
          secondary: "#4b5563", // Buttons und Umrandung
          "secondary-content": "#E9FBFF", // Weiß - Schrift in Buttons
          accent: "#6b7280", // Text in Eingabefeld z.B. Receiver Address
          "accent-content": "#088484", // ?????
          neutral: "#4b5563", // ????
          "neutral-content": "#374151", // ????
          "base-100": "#374151", // Mittelgrau - Hintergrund Kopfzeile und NFT-Hintergrund
          "base-200": "#111827", // Schwarz Hintergrund und Eingabefeld
          "base-300": "#111827", // Home-Unterer Block & Umrandung Eingabefeld
          "base-content": "#E9FBFF", // weiß - Schriftfarbe
          info: "#6b7280",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",
          "--rounded-btn": "9999rem",
          ".tooltip": { "--tooltip-tail": "6px", "--tooltip-color": "oklch(var(--p))" },
          ".link": { textUnderlineOffset: "2px" },
          ".link:hover": { opacity: "80%" },          
        },
      },
      {
        dark: {
          primary: "#C8F5FF",
          "primary-content": "#026262",
          secondary: "#89d7e9",
          "secondary-content": "#088484",
          accent: "#026262",
          "accent-content": "#E9FBFF",
          neutral: "#088484",
          "neutral-content": "#F0FCFF",
          "base-100": "#F0FCFF",
          "base-200": "#E1FAFF",
          "base-300": "#C8F5FF",
          "base-content": "#088484",
          info: "#026262",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",
          "--rounded-btn": "9999rem",
          ".tooltip": { "--tooltip-tail": "6px" },
          ".link": { textUnderlineOffset: "2px" },
          ".link:hover": { opacity: "80%" },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: { "space-grotesk": ["Space Grotesk", "sans-serif"] },
      boxShadow: { center: "0 0 12px -2px rgb(0 0 0 / 0.05)" },
      animation: { "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
    },
  },
};
