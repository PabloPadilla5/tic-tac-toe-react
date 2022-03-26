/*const nrwlConfig = require("@nrwl/react/plugins/webpack.js");

module.exports = (config, context) => {
  // first call it so that @nrwl/react plugin adds its configs
  nrwlConfig(config);

  return {
    ...config,
    node: undefined
  };
};*/

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = {
// Other rules like entry, output, devserver....,
plugins: [
    new NodePolyfillPlugin()
]}