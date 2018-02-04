class Turtle {
    constructor(name, age, gender) {
        if (this.constructor.name === 'Turtle') {
            throw new Error
        }
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }

    grow(age) {
        this.age += age;
    }

    toString() {
        let answer = '';
        answer+= `Turtle: ${this.name}\n`;
        answer+= `Aged - ${this.age}; Gender - ${this.gender}`;
        return answer;
    }
}

module.exports = { Turtle };