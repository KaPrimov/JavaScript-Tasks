let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;
let sharedObject = require('../shared-obj').sharedObject;

describe('sharedObj', function () {
    it('name prop shoud be null at the beginning', function () {
        expect(sharedObject.name).to.equal(null, 'Name did not start with null')
    });
    it('income prop shoud be null at the beginning', function () {
        expect(sharedObject.income).to.equal(null, 'Name did not start with null')
    });

    describe('changeName', function () {
        it('with invalid param should not change the value', function () {
            sharedObject.changeName("");
            expect(sharedObject.name).to.equal(null, 'Name incorrect')
        });
        it('with invalid param should not change the value', function () {
            sharedObject.name = 'Pesho';
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal('Pesho', 'Name incorrect')
        });
        it('with invalid param should not change the textbox value', function () {
            let nameTextbox = $('#name');
            nameTextbox.val('Ivan');
            sharedObject.changeName('');
            expect(nameTextbox.val()).to.equal('Ivan', 'Name incorrect')
        });
        it('with invalid param should not change the value', function () {
            sharedObject.changeName('Ivan');
            expect(sharedObject.name).to.equal('Ivan', 'Name incorrect')
        });
        it('with valid param should change the name textbox value', function () {
            sharedObject.changeName('Stamat');
            let nameTextBox = $('#name');
            expect(nameTextBox.val()).to.equal('Stamat', 'Name incorrect')
        })

    });
    describe('changeIncome', function () {
        it('with invalid param should not change the value', function () {
            sharedObject.income = 123;
            sharedObject.changeIncome({name: 'pesho'});
            expect(sharedObject.income).to.equal(123, 'Income incorrect')
        });
        it('with invalid floating point num should not change the value', function () {
            sharedObject.income = 123;
            sharedObject.changeIncome(2.43);
            expect(sharedObject.income).to.equal(123, 'Income incorrect')
        });
        it('with invalid negative num should not change the value', function () {
            sharedObject.income = 123;
            sharedObject.changeIncome(-12);
            expect(sharedObject.income).to.equal(123, 'Income incorrect')
        });
        it('with invalid 0 should not change the value', function () {
            sharedObject.income = 123;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(123, 'Income incorrect')
        });

        it('with valid int should change the value', function () {
            sharedObject.changeIncome(150);
            expect(sharedObject.income).to.equal(150, 'Name incorrect')
        });
        it('with invalid param should not change the income text box', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome({name: 'pesho'});
            expect(incomeTextBox.val()).to.equal('5', 'Income incorrect')
        });
        it('with invalid floating point num should not change the income text box', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(2.55);
            expect(incomeTextBox.val()).to.equal('5', 'Income incorrect')
        });
        it('with invalid negative num should not change the income text box', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(-12);
            expect(incomeTextBox.val()).to.equal('5', 'Income incorrect')
        });
        it('with invalid 0 should not change the income text box', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(0);
            expect(incomeTextBox.val()).to.equal('5', 'Income incorrect')
        });

        it('with valid int should change the income text box', function () {
            let incomeTextBox = $('#income');
            sharedObject.changeIncome(150);
            expect(incomeTextBox.val()).to.equal('150', 'Name incorrect')
        })

    });
    describe('updateName', function () {
        it('with invalid param should not change the name', function () {
            sharedObject.name = 'Gosho';
            let nameTextBox = $('#name');
            nameTextBox.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Gosho', 'Name incorrect')
        });
        it('with valid name should change the income text box', function () {
            let nameTextBox = $('#name');
            nameTextBox.val('Pesho');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Pesho', 'Name incorrect')
        })
    });
    describe('updateIncome', function () {
        it('with invalid param should not change the income', function () {
            sharedObject.income = 120;
            let incomeTextBox = $('#income');
            incomeTextBox.val('saf');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(120, 'Income incorrect')
        });
        it('with invalid param should not change the income', function () {
            sharedObject.income = 120;
            let incomeTextBox = $('#income');
            incomeTextBox.val('2.42');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(120, 'Income incorrect')
        });
        it('with invalid param should not change the income', function () {
            sharedObject.income = 120;
            let incomeTextBox = $('#income');
            incomeTextBox.val('-20');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(120, 'Income incorrect')
        });
        it('with invalid param should not change the income', function () {
            sharedObject.income = 120;
            let incomeTextBox = $('#income');
            incomeTextBox.val('');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(120, 'Income incorrect')
        });
        it('with valid integer should change the value', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('124');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(124, 'Income incorrect')
        })
    })
});
