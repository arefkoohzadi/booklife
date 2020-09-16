module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        primary: "#F4F1EA",
        secondary: "#f9f7f4",
      },
      fontFamily: {
        IRANSans: ["IRANSans"],
        IRANSansMedium: ["IRANSansMedium"],
        IRANSansBold: ["IRANSansBold"],
        IRANSansFaNum: ["IRANSansFaNum"],
        IRANSansFaNumMedium: ["IRANSansFaNumMedium"],
      },
      boxShadow: {
        "outline-grey": "0 0 0 3px rgba(226, 232, 240, 0.5)",
        "outline-blue": "0 0 0 3px rgba(190, 227, 248, 0.5)",
      },
      keyframes: {
        progress: {
          "0%": { left: "-50%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        progress: "progress 2s linear infinite",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"],
    margin: ["responsive", "hover", "focus", "first"],
    backgroundColor: ["responsive", "even", "odd", "hover", "focus"],
  },
  plugins: [],
};
