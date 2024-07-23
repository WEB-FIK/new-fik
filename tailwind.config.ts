import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform': 'transform',
      },
      transformOrigin: {
        '0': '0%',
      },
      transitionDuration: {
        '0': '0ms',
        '500': '500ms',
        '2000': '2000ms',
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-50": "#FDEEEA",
        "primary-100": "#F9CCBF",
        "primary-200": "#F5AA94",
        "primary-300": "#F18869",
        "primary-400": "#ED663E",
        "primary-500": "#EB5528",
        "primary-600": "#EB5528",
        "primary-700": "#8D3318",
        "primary-800": "#5E2210",
        "primary-900": "#2F1108",

        "neutral-50": "#F0F1F2",
        "neutral-100": "#D3D59",
        "neutral-200": "#B5B9C0",
        "neutral-300": "#979CA6",
        "neutral-400": "#7A808D",
        "neutral-500": "#6B7280",
        "neutral-600": "#565B66",
        "neutral-700": "#40444D",
        "neutral-800": "#2B2E33",
        "neutral-900": "#15171A",

        "danger-50": "#FDEBEA",
        "danger-100": "#F9C3BF",
        "danger-200": "#F59B94",
        "danger-300": "#F07269",
        "danger-400": "#EC4A3E",
        "danger-500": "#FF0000",
        "danger-600": "#BB2B20",
        "danger-700": "#8C2018",
        "danger-800": "#5E1610",
        "danger-900": "#2F0B08",

        "success-50": "#EEF6EE",
        "success-100": "#CBE4CB",
        "success-200": "#A9D2A8",
        "success-300": "#87C085",
        "success-400": "#64AE62",
        "success-500": "#53A551",
        "success-600": "#428441",
        "success-700": "#326331",
        "success-800": "#214220",
        "success-900": "#112110",

        "warning-50": "#FEFCEE",
        "warning-100": "#FDF7CB",
        "warning-200": "#FCF2A9",
        "warning-300": "#FBED87",
        "warning-400": "#FAE864",
        "warning-500": "#F9E553",
        "warning-600": "#C7B742",
        "warning-700": "#958932",
        "warning-800": "#645C21",
        "warning-900": "#322E11",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
