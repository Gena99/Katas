var assert = require('assert');


describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});

var maxEtMin = require('../MinEtMax/index.js')
describe('Kata Max et Min', function() {
    it('MaxEtMin("1 2 3 4 5")should return "5 1"', function() {
        assert.equal(maxEtMin ("1 2 3 4 5"), "5 1");
    });
    it('MaxEtMin("1 2 -3 4 5")should return "5 -3"', function() {
        assert.equal(maxEtMin ("1 2 -3 4 5"), "5 -3");
    });
    it('MaxEtMin("1 9 3 4 -5")should return "9 -5"', function() {
        assert.equal(maxEtMin ("1 9 3 4 -5"), "9 -5");
    });
});

