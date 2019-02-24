var webpack = require("webpack"),
    config = require("../webpack.config");
    // UglifyJsPlugin = require('uglifyjs-webpack-plugin');

delete config.chromeExtensionBoilerplate;

// const prodConfig = Object.assign({}, config, {
  // optimization: {
  //   minimizer: [new UglifyJsPlugin()],
  // },
// });

webpack(
  config,
  function (err) { if (err) throw err; }
);
