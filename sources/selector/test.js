var Selector = require('../').Selector;
var assert = require('chai').assert;

describe('selector', function() {
    it('selector', function() {
        assert.equal(String(Selector('.class#name')), '.class#name {}');
    });
    it('selectors', function() {
        assert.equal(String(Selector('.one#one', Selector('.two#two'))), '.one#one {}.one#one .two#two {}');
    });
});