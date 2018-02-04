let expect = require('chai').expect;
let list = require('../add-delete-in-list').list;



describe('list', function () {
    it('check for the empty string', function () {
        expect(list.toString()).to.equal('')
    });
    it('check for the list type', function () {
        expect(typeof list).to.equal('object')
    });
    it('check for the add', function () {
        expect(typeof list.add).to.equal('function')
    });
    it('check for the delete', function () {
        expect(typeof list.delete).to.equal('function')
    });
    it('check for the toString', function () {
        expect(typeof list.toString).to.equal('function')
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(2);
        expect(list.delete(6)).to.equal(undefined)
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(2);
        expect(list.delete(-2)).to.equal(undefined)
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(7);
        expect(list.delete(6.12)).to.equal(undefined)
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(2);
        expect(list.delete('pesho')).to.equal(undefined)
    });
    it('expect to return the correct element', function () {
        list.add(4);
        list.add(7);
        expect(list.delete(1)).to.equal(7)
    });
    it('expect to add the correct element', function () {
        list.add(4);
        list.add(5);
        expect(list.toString()).to.equal('4, 5')
    });
    it('expect to add the correct element', function () {
        list.add('sedem');
        list.add('osem');
        expect(list.toString()).to.equal('sedem, osem')
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(2);
        expect(list.delete(0)).to.equal(4)
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(2);
        list.add('sedem');
        list.add('gesho');
        expect(list.delete(3)).to.equal('gesho')
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(2);
        list.add('sedem');
        list.add('gesho');
        let arr = list.toString();
        expect(arr.length).to.equal(18)
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(2);
        expect(list.delete(12)).to.equal(undefined);
        expect(list.toString()).to.equal('4, 2')

    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(2);
        list.add(7);
        list.delete(2);
        expect(list.toString()).to.equal('4, 2')
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(2);
        list.add(7);
        list.delete(12);
        expect(list.toString()).to.equal('4, 2, 7')
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(4);
        list.add(2);
        list.add(7);
        list.delete(2.32);
        expect(list.toString()).to.equal('4, 2, 7')
    });
    it('expect to return undefined with incorrect index', function () {
        list.delete(4);
        list.delete(2);

        expect(list.toString()).to.equal('')
    });
    it('expect to return undefined with incorrect index', function () {
        list.add(2);
        list.delete(0);
        expect(list.toString()).to.equal('')
    });
});