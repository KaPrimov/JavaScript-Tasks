let expect = require("chai").expect;
let SortedList = require('../sorted-list').SortedList;

describe('sortedList', function () {
    let myList = {};

    beforeEach(function () {
        myList = new SortedList();
    });

    it('check for constructor', function () {
        expect(typeof SortedList).to.equal('function')
    });

    it('check for add', function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true)
    });

    it('check for remove', function () {
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true)
    });

    it('check for get', function () {
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true)
    });

    it('check for size', function () {
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true)
    });

    it ('should have correct size', function () {
        expect(myList.size).to.equal(0);
    });

    it ('should have correct size', function () {
        myList.add(3);
        myList.add(4);
        expect(myList.size).to.equal(2)
    });

    it ('should have correct get', function () {
        myList.add(3);
        myList.add(4);
        expect(myList.get(1)).to.equal(4)
    });

    it ('should have correct sort', function () {
        myList.add(3);
        myList.add(4);
        myList.add(2);
        myList.add(10);
        expect(myList.get(0)).to.equal(2);
        expect(myList.get(1)).to.equal(3);
        expect(myList.get(2)).to.equal(4);
        expect(myList.get(3)).to.equal(10);

    });

    it ('should have correct remove', function () {
        myList.add(3);
        myList.add(4);
        myList.add(2);
        myList.add(10);
        myList.remove(1);
        expect(myList.get(0)).to.equal(2);
        expect(myList.get(1)).to.equal(4);
        expect(myList.get(2)).to.equal(10);
        expect(myList.size).to.equal(3);

    });

    it ('should remove the correct numbers', function () {
        myList.add(3);
        myList.add(4);
        myList.add(46);
        myList.remove(1);
        expect(myList.get(1)).to.equal(46)
    });

    it ('should not work with negative index', function () {
        myList.add(3);
        myList.add(4);
        myList.add(46);
        myList.remove(1);
        expect(() => myList.get(-1)).to.throw(Error);
        expect(() => myList.remove(-1)).to.throw(Error);
    });

    it ('should not work with too big index', function () {
        myList.add(3);
        myList.add(4);
        myList.add(46);
        myList.remove(1);
        expect(() => myList.get(4)).to.throw(Error);
        expect(() => myList.remove(4)).to.throw(Error);
    });

    it ('should not work with too empty list', function () {
        expect(() => myList.get(0)).to.throw(Error);
        expect(() => myList.remove(0)).to.throw(Error);
    });

});