module.exports = env => {
  if (env && env.production) {
    return require("./config/webpack.prod")(env.production);
  } else {
    return require("./config/webpack.dev")(false);
  }
};