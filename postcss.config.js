const purgeCSS = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    cssnano({
      preset: "default",
    }),
    process.env.NODE_ENV === "production" &&
      purgeCSS({
        content: ["./src/**/*.js"],
        css: ["./src/**/*.css"],
      }),
  ],
};
