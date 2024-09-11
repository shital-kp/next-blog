import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: "white",
        textColor: "black",
        softBg: "#f0f0f0",
        softTextColor: "#626262",
      },
      screens: {
        'custom-lg': {'max': '1024px'}, 
      },
    },
  },
  plugins: [],
};
export default config;
