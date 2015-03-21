exports.data = require('oswst').data;

require('./selector/index.js')(exports);

require('./option/index.js')(exports);

if (typeof(window) == 'object') window['oswss'] = exports;