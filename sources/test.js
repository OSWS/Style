describe(require('../package.json').name+'@'+require('../package.json').version, function() {
    require('./selector/test.js');
    require('./option/test.js');
});