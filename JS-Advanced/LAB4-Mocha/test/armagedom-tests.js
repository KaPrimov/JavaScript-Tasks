let expect = require('chai').expect;
this.jsdom = require('jsdom-global')();
$ = require('jquery');
let nuke = require('../armagedom').nuke;

describe('testing the nuke function', function () {
    beforeEach(function () {
        document.body.innerHTML =
            `<div id="target">
            <div class="nested target">
            <p>This is some text</p>
        </div>
        <div class="target">
            <p>Empty div</p>
        </div>
        <div class="inside">
            <s9pan class="nested">Some more text</s9pan>
        <span class="target">Some more text</span>
        </div>
        </div>`
    });

    it ('does nothing on invalid selector', function () {
        let selector = $('#target');
        let prevHTMLText = selector.html();
        nuke(4, '#target');
        expect(selector.html()).to.be.equal(prevHTMLText);
    });

    it('should do noting if 1 parameters isn\'t valid selector', ()=> {
        let selector1 = $('#target');
        let len = $(selector1).length;
        let selector2 = 'nested';
        nuke(selector1, selector2);
        expect(selector1.length).to.equal(len)
    });

    it('should do noting if parameters are equals', () => {
        let selector = '#target';
        let before = document.body.innerHTML;
        nuke(selector, selector);
        let after = document.body.innerHTML;
        expect(before).to.be.equal(after);
    });

    it('should remove nodes whit correct selectors', () => {
        let selector1 = '.target';
        let selector2 = '.nested';
        nuke(selector1, selector2);
        let after = $(selector1 + selector2);
        expect(after.length).to.equal(0);
    });

    it('should do nothing on nuke(2, "#target")', () => {
        let selector = $('#target');
        let prev = selector.html();
        nuke('.nested', '.inside');
        expect(selector.html()).to.equal(prev);
    });

});