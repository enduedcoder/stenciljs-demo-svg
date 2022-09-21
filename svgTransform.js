const path = require('path');

module.exports = {
  process(sourceText, sourcePath) {
    console.log(sourceText, sourcePath);
    return {
      code: `module.exports = ${JSON.stringify(path.basename('sourcePath'))};`,
      //  code: `module.exports = {};`,
    };
  },
  getCacheKey() {
    return 'svgTransform';
  },
};

// const fs = require('fs');
// const path = require('path');
// const crypto = require('crypto');

// const base64 = (filename, data) => {
//   console.log(data);
//   // const type = filename.endsWith('.svg') ? 'svg+xml' : path.extname(filename).slice(1) || 'png';
//   // return `data:image/${type};base64,${data.toString('base64')}`;
// };

// module.exports = {
//   getCacheKey: (_fileData, filename) => crypto.createHash('md5').update(filename).digest('hex'),
//   process: (sourceText, filename) => `module.exports = <svg />;`,
// };
// console.log(module.process);
