let expect = require('chai').expect;
let Console = require('./Console').Console;

describe('Object Console', function () {
    let myConsoleObj = {};
    beforeEach(function () {
        let myConsoleObj = new Console();
    });
    it('should return string, when given only one string', function () {
        expect(Console.writeLine('some')).to.equal('some')
    });
    it('should return JSON, when given only one object', function () {
        let obj = {name: 'pesho', age: 12};
        expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj))
    });
    it('should return JSON, when given only one object', function () {
        expect(Console.writeLine(2)).to.equal(undefined)
    });
    it('should return JSON, when given only one object', function () {
        let obj = {};
        expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj))
    });
    it ('should throw Type Error when one of the args in not a string', function () {
        expect(() => Console.writeLine(2, 'joke')).to.throw(TypeError)
    });
    it ('should throw Type Error when one of the args in not a string', function () {
        expect(() => Console.writeLine({name: 'pesho'}, 4,'joke')).to.throw(TypeError)
    });
    it ('should throw Type Error when one of the args in not a string', function () {
        expect(() => Console.writeLine('joke', {name: 'pesho', age: 12})).to.throw(TypeError)
    });
    it ('should throw Type Error when one of the args in not a string', function () {
        expect(() => Console.writeLine()).to.throw(TypeError)
    });
    it ('should throw Range Error when the param are too many', function () {
        expect(() => Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7, 12, 23)).to.throw(RangeError)
    });
    it ('should throw Range Error when the param are too many', function () {
        expect(() => Console.writeLine("The sum of {0} and {1} is {14}", 3, 4, 7)).to.throw(RangeError)
    });
    it ('should throw Range Error when the param are too many', function () {
        expect(() => Console.writeLine("The sum of {0} and {1} is {2}", 3)).to.throw(RangeError)
    });
    it ('should throw Range Error when the param are too many', function () {
        expect(() => Console.writeLine("The sum of and is ", 3)).to.throw(TypeError)
    });
    it ('should throw Range Error when the param are too many', function () {
        expect(() => Console.writeLine("The sum of {0} and {1} is {12}", 3, 3, 6)).to.throw(RangeError)
    });
    it ('should  work ok', function () {
        expect(Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7)).to.equal("The sum of 3 and 4 is 7")
    });
    it ('should  work ok', function () {
        expect(Console.writeLine("The sum of {0} and {1} is {2}")).to.equal("The sum of {0} and {1} is {2}")
    });
    it ('should  work ok', function () {
        expect(Console.writeLine("{0} {1} {2}", 'how', 'are', 'you')).to.equal("how are you")
    });
    it ('should throw work ok', function () {
        expect(Console.writeLine("{0}", 'how')).to.equal("how")
    });
    it ('should throw Range Error when the param are too many', function () {
        expect(() => Console.writeLine("The sum of {1} and {2} is {3}", 3, 2, 5)).to.throw(RangeError)
    });
    it ('should work ok', function () {
        let obj = {name: 'pesho'};
        expect(Console.writeLine("{0} {1} {2}", 'how', 'are', obj)).to.equal(`how are [object Object]`)
    });
    it ('should have function consoleWriteLine', function () {
        expect(typeof Console.writeLine).to.equal('function')
    });
    it ('should throw Range Error when one param is negative', function () {
        expect(() => Console.writeLine("The sum of {-2} and {0} is {1}", 3, 3, 6)).to.throw(RangeError)
    });
    it('should replace correctly all placeholders on mixed placeholder numbers', () => {
        expect(Console.writeLine('Test {1}, {0} {2} - {3}', 'first', 'second', 'third', 'chetvyrti')).to.equal('Test second, first third - chetvyrti');
    });
});

