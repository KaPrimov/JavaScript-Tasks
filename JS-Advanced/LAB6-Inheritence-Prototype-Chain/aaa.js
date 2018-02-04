let expect = require('chai').expect;

// function solve() {
class Employee {
    constructor(name, age) {
        if (new.target === Employee) {
            throw new Error('Cannot instantiate directly');
        }
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    work () {
        let currentTask = this.tasks.shift();
        console.log(`${this.name} ${currentTask}`);
        this.tasks.push(currentTask);
    }

    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    getSalary() {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor (name, age) {
        super(name, age);
        this.tasks.push('is working on simple task.')
    }
}

class  Senior extends Employee {
    constructor (name, age) {
        super(name, age);
        this.tasks.push('is working on a complicated task.');
        this.tasks.push('is taking time off work.');
        this.tasks.push('is supervising junior worker.');
    }
}

class Manager extends Employee {
    constructor(name, age){
        super(name,age);
        this.dividend = 0;
        this.tasks.push('scheduled a meeting');
        this.tasks.push('is preparing quarterly report.');
    }

    getSalary() {
        return this.salary + this.divident;
    }
}

//     return {Employee, Junior, Senior, Manager}
// }

// let juni = new Junior('ivan', 12);
// juni.salary = 1333;
// console.log(juni.collectSalary());
var guy1 = new Junior('Peter', 27);
guy1.salary = 1200;
guy1.collectSalary();
expect(log[0] == 'Peter received 1200 this month.').to.equal(true, "Junior's salary was not logged.");