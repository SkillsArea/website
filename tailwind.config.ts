import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTextShadow from "tailwindcss-textshadow";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        default: '2px 2px 2px rgba(0, 0, 0, 0.3), -1px -1px 1px rgba(255, 255, 255, 0.7)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        english: ["Arial Rounded MT Bold"],
        arabic: ["Almarai"],
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTextShadow],
};

export default config;
