import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#077194",
        secondary: "#09acd5",
        accent: "#07b1d9",
        disabled: "#cbd5e1",
        back: "#f1f5f9",
        fore: "#020617",
      },
    },
  },
  plugins: [],
};
export default config;
