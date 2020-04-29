const path = require('path');

module.exports = (context, options) => ({
  getClientModules() {
    return [path.resolve(__dirname, './templefile.js')];
  },
});
