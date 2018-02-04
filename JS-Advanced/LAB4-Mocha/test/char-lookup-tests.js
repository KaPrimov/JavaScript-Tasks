let expect = require("chai").expect;
let lookupChar = require('../char-lookup').lookupChar;
let wrongAnswerStatement = 'The function did not return the correct result';

describe('lookupChar', function () {
    it('non string first param -> return undefined', function () {
        expect(lookupChar(13, 0)).to.be.equal(undefined, 'The function did not return the correct result')
    });
    it('non number second param -> return undefined', function () {
        expect(lookupChar('pesho', 'gosho')).to.equal(undefined, 'The function did not return the correct result')
    });
    it('non floating point number as second param -> return undefined', function () {
        expect(lookupChar('pesho', 2.31)).to.equal(undefined, 'The function did not return the correct result')
    });
    it('with incorrect index value, should return incorrect index', function () {
        expect(lookupChar('pesho', 23)).to.equal('Incorrect index', 'The function did not return the correct result')
    });
    it('with incorrect index value, should return incorrect index', function () {
        expect(lookupChar('pesho', -1)).to.equal('Incorrect index', 'The function did not return the correct result')
    });
    it('with incorrect index value, should return incorrect index', function () {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index', 'The function did not return the correct result')
    });
    it('with correct paramss, should return value', function () {
        expect(lookupChar('pesho', 0)).to.equal('p', 'The function did not return the correct result')
    });
    it('with incorrect index value, should return incorrect index', function () {
        expect(lookupChar('stamat', 3)).to.equal('m', 'The function did not return the correct result')
    });
});