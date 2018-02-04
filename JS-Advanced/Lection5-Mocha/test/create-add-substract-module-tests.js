let expect = require('chai').expect;
let createCalculator = require('../createAddSubstractModule').createAddSubtractModule;


describe('createAddSubtractModule()', function () {
    let calc;
    beforeEach(function() {
        calc = createCalculator()
    });
    it('should return 0 after {get}', function() {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });

    it('should return 5 after {add 3; add 2}', function() {
        calc.add(3); calc.add(2); let value = calc.get();
        expect(value).to.be.equal(5);
    });

    it('should return 5 after {subtract 3; subtract 2}', function() {
        calc.subtract(3); calc.subtract(2); let value = calc.get();
        expect(value).to.be.equal(-5);
    });
    it('should return 5 after {add 5.3; subtract 1.1}', function() {
        calc.add(5.3); calc.subtract(1.1); let value = Number(calc.get().toFixed(1));
        expect(value).to.be.equal(4.2);
    });
    it("should return 5 after {add(10); subtract('7'); add('-2'); subtract(-1)}", function () {
        calc.add(10); calc.subtract('7'); calc.add('-2'); calc.subtract(-1); let value = calc.get();
        expect(value).to.be.equal(2);
    });
    it('should return 5 after {add hello; add 2}', function() {
        calc.add('hello');let value = calc.get();
        expect(value).to.be.NaN;
    });
    it('should return 5 after {add 3; add 2}', function() {
        calc.subtract('hello'); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it('should return 0 after {add 3; add 2}', function() {
        calc.subtract(0); let value = calc.get();
        expect(value).to.be.equal(0)
    });
    it('should return 0 after {add 3; add 2}', function() {
        calc.add(0); let value = calc.get();
        expect(value).to.be.equal(0)
    });
});
