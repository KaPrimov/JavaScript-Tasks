let expect = require("chai").expect;
let sum = require('../sum-of-numbers').sum;


describe('sum(arr) - sum of numbers', function () {
    it('should return 3 for [1,2]', function () {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it('should return 1 for [1]', function () {
        expect(sum([1])).to.be.equal(1);
    });
    it('should return 0 for []', function () {
        expect(sum([])).to.be.equal(0);
    });
    it('should return 3 for [1.5,2.5,-1]', function () {
        expect(sum([1.5, 2.5, -1])).to.be.equal(3);
    });
    it('should return NaN for invalid value', function () {
        expect(sum(['invalid', 'value'])).to.be.NaN;
    });
});