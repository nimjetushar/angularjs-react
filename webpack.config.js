module.exports = env => {
  if (env && env.production) {
    return require("./config/webpack.prod");
  } else {
    return require("./config/webpack.dev");
  }
};
