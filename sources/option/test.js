var Option = require('../').Option;
var assert = require('chai').assert;

describe('option', function() {
    it('native', function() {
        assert.equal(String(Option().key('background').value('red').important()), 'background:red!important;');
    });
    it('prefixes', function() {
        assert.equal(String(Option().key('background').value('red').prefixes('', '-webkit-', '-ie-').important()), 'background:red!important;-webkit-background:red!important;-ie-background:red!important;');
    });
});