const path = require('path');

const test = '<svg />';

module.exports = {
  process(source, filename, config, options) {
    console.log(`'${new Date().getTime().toString()} ${source}'`);
    return { code: `module.exports = ${JSON.stringify(source)};` };
  },

  // ** use --no-cache to clear cache ** //
  // getCacheKey() {
  //   // The output is always the same.
  //   return new Date().getTime().toString();
  // },
};
