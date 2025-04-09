import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        roxo: "#150329",
      },

      gridTemplateColumns: {
        app: "minmax(16rem , 18rem) 1fr",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
