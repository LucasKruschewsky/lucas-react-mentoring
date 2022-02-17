require("dotenv").config();

module.exports =
  process.env.ENV_MODE === "development"
    ? require("./webpack.config.dev")
    : require("./webpack.config.prod");
