var Option = require('../').Option;
var assert = require('chai').assert;

describe('option', function() {
    it('background', function() {
        assert.equal(String(Option('background', 'red').important()), 'background:red!important;');
    });
});