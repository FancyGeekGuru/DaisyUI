const plugin = require("tailwindcss/plugin");
const responsiveRegex = require("../lib/responsiveRegex");
module.exports = {
  content: [
    { raw: '' },
  ],
  safelist: responsiveRegex,
  theme: {
    colors: require("../colors"),
  },
  corePlugins: [
    "animation",
    "backgroundColor",
    "backgroundImage",
    "backgroundOpacity",
    "backdropOpacity",
    "borderColor",
    "borderOpacity",
    "divideColor",
    "divideOpacity",
    "gradientColorStops",
    "opacity",
    "placeholderColor",
    "preflight",
    "ringColor",
    "ringOffsetColor",
    "ringOffsetWidth",
    "ringOpacity",
    "ringWidth",
    "textColor",
    "textOpacity",
    "transitionProperty",
  ],
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents }) {
      addBase(require("../../dist/base"));
      addComponents(require("../../dist/styled"));
      addUtilities(require("../../dist/utilities"), {
        variants: ["responsive"],
      });
      addUtilities(require("../../dist/utilities-unstyled"), {
        variants: ["responsive"],
      });
      addUtilities(require("../../dist/utilities-styled"), {
        variants: ["responsive"],
      });
    }),
  ],
};
