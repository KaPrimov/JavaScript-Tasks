let expect = require("chai").expect;
let isOddOrEven = require('../isOdd').isOddOrEven;


describe('isOddOrEven', function () {
    it('with number param should return undefined', function () {
        expect(isOddOrEven(12)).to.be.equal(undefined,
        'Function did not return the correct answer');
    });
    it('with object param should return undefined', function () {
        expect(isOddOrEven({name: 'pesho'})).to.be.equal(undefined,
            'Function did not return the correct answer');
    });
    it('even length string', function () {
        expect(isOddOrEven('roar'), 'even',
            'Function did not return the correct answer');
    });
    it('odd length string', function () {
        expect(isOddOrEven('roary'), 'odd',
            'Function did not return the correct answer');
    });
    it('multiple inputs', function () {
        expect(isOddOrEven('cat')).to.equal('odd',
            'Function did not return the correct answer');
        expect(isOddOrEven('alabala')).to.equal('odd',
            'Function did not return the correct answer');
        expect(isOddOrEven('it is even')).to.equal('even',
            'Function did not return the correct answer');
    });

});

