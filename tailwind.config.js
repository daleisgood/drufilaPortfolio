/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#BFECFF",
        secondary: "#1B2141",
        tertiary: "#00B2FF",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      textColor: {
        primary: "#3A3A3A",
        secondary: "#00B2FF",
      },
      keyframes: {
        ring:{
          "0%":{transform: "rotate(0deg)"},
          "25%":{transform: "rotate(10deg)"},
          "50%":{transform: "rotate(0deg)"},
          "75%":{transform: "rotate(-10deg)"},
          "100%":{transform: "rotate(0deg)"}
        },
        falldown: {
          "0%": { transform: "translateY(-3000px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        rightToLeft: {
          "0%": { transform: "translateX(3000px)", opacity: "0" },

          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        leftToRight: {
          "0%": { transform: "translateX(-3000px)", opacity: "0" },

          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        infiniteSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        moveUp: {
          "0%": {
            transform: "translateY(20px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      transitionProperty: {
        bgColor: "backgroundColor",
      },
      animation: {
        falldown: "falldown 2s ease",
        rightToLeft: "rightToLeft 2s ease",
        leftToRight: "leftToRight 2s ease",
        infiniteSlide: "infiniteSlide 30s  linear infinite",
        moveUp: "moveUp .5s ease-in-out",
        ring: "ring .2s ease-in-out",
      },
      transform: {
        slideRight: "translateX(-20px)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
       
        ".group .group-child:hover":{
          width:"100%",
          height:"100%",
          "z-index": "20"
        }
      };
      addUtilities(newUtilities);
    },
  ],
};
