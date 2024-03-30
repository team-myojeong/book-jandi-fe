import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: {
          50: "#ECFDF4",
          100: "#C1EDD6",
          200: "#95DDB7",
          300: "#6ACE99",
          400: "#3EBE7A",
          500: "#14AE5C",
          600: "#0F8B4A",
          700: "#0B6837",
          800: "#084625",
          900: "#042312",
        },
        grey: {
          0: "#FFFFFF",
          50: "#F7F8FA",
          100: "#F2F3F6",
          200: "#EAEBEE",
          300: "#DCDEE3",
          400: "#D1D3D8",
          500: "#ADB1BA",
          600: "#868B94",
          700: "#4D5159",
          800: "#393A40",
          900: "#212124",
        },
        yellow: {
          50: "#FEF7ED",
          100: "#FDEEDA",
          200: "#FBDDB6",
          300: "#FACD91",
          400: "#F8BC6D",
          500: "#F6AB48",
          600: "#C98B3A",
          700: "#9C6B2C",
          800: "#6F4C1D",
          900: "#422C0F",
        },
      },
      height: {
        9.5: "2.125rem",
        15: "3.75rem",
      },
    },
  },
  plugins: [],
  safelist: [{ pattern: /w-.+/ }],
};
export default config;
