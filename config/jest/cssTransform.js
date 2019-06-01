'use strict';

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html
const register = require('ignore-styles');
module.exports = {
  process() {
    register(['.css', '.sass', '.scss']);
    return 'module.exports = {};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  }
};
