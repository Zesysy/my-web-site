function HACK_removeMinimizeOptionFromCssLoaders(config) {
  config.module.rules.forEach((rule) => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach((u) => {
        if (u.loader === "css-loader" && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}
module.exports = {
  webpack(config) {
    HACK_removeMinimizeOptionFromCssLoaders(config);
    return config;
  },
};
