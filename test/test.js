var assert = require('assert');

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

var interval = require('../Intervalle/interval.js');
describe('Kata Intervalle', function() {
    it("Interval([1, 2, 3, 5, 7, 8])should return ['1-3', '5', '7-8']", function() {
        assert.deepEqual(interval ([1, 2, 3, 5, 7, 8]), ['1-3', '5', '7-8']);
    });
    it("Interval([1, 3, 2, 5, 7, 8])should return ['1-3', '5', '7-8']", function() {
        assert.deepEqual(interval ([1, 3, 2, 5, 7, 8]), ['1-3', '5', '7-8']);
    });
    it("Interval([1, 'A', 3, 2, 5, 2.5, 7, 8])should return ['1-3', '5', '7-8']", function() {
        assert.deepEqual(interval ([1, 'A', 3, 2, 5, 2.5, 7, 8]), ['1-3', '5', '7-8']);
    });
    it("Interval([1, 'A', 3, 2, 5, 5.5, 2.5, 7, 8])should return ['1-3', '5', '7-8']", function() {
        assert.deepEqual(interval ([1, 'A', 3, 2, 5, 5.5, 2.5, 7, 8]), ['1-3', '5', '7-8']);
    });
});

