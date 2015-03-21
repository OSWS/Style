describe('option', function() {
    it('background', function() {
        assert.equal(String(S.Option('background', 'red').important()), 'background:red !important;');
    });
});