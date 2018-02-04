let expect = require("chai").expect;
let assert = require("chai").assert;
let mathEnforcer = require('../math-enforcer').mathEnforcer;

describe('MathEnforcer', function () {
    describe('addFive', function () {
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.addFive({name: 'pesho'})).to.equal(undefined, 'Function did not return the correct answer')
        });
        it('with a number param, should return correct result', function () {
            expect(mathEnforcer.addFive(-4)).to.equal(1, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.addFive(2.34)).to.equal(7.34, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.addFive(2)).to.equal(7, 'Function did not return the correct answer')
        });
    });
    
    describe('subtractTen', function () {
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.subtractTen({name: 'pesho'})).to.equal(undefined, 'Function did not return the correct answer')
        });
        it('with a number param, should return correct result', function () {
            expect(mathEnforcer.subtractTen(6)).to.equal(-4, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.subtractTen(2.34)).to.equal(-7.66, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.subtractTen(-2.34)).to.equal(-12.34, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.subtractTen(14)).to.equal(4, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.subtractTen(10)).to.equal(0, 'Function did not return the correct answer')
        });

    });

    describe('sum', function () {
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.sum('pesho', 3)).to.equal(undefined, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.sum(7, {name: 'pesho'})).to.equal(undefined, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.sum([12, 3, 4], {name: 'pesho'})).to.equal(undefined, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.sum(3)).to.equal(undefined, 'Function did not return the correct answer')
        });
        it('with a number param, should return correct result', function () {
            expect(mathEnforcer.sum(0.1, 0.2)).closeTo(0.3, 0.30000000000000004, 'Function did not return the correct answer')
        });
        it('with a number param, should return correct result', function () {
            expect(mathEnforcer.sum(-2.34, 3.45)).closeTo(1.11, 1.1100000000000003, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.sum(2.34, 3.45)).to.equal(5.79, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.sum(-3, -3)).to.equal(-6, 'Function did not return the correct answer')
        });
        it('with a non-number param, should return correct result', function () {
            expect(mathEnforcer.sum(5, 5)).to.equal(10, 'Function did not return the correct answer')
        });
    })
});