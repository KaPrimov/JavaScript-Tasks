class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }

}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject
    }
}

function extendPerson(Person) {
    Person.prototype.species = 'Human';
    Person.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}


let p = new Person('Ivan', 'sada@sdasd.com');
//extendPerson(p);
console.log(p);
