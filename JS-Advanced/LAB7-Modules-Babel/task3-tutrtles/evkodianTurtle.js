let Turtle = require('./turtle').Turtle;

class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodium) {
        super(name, age, gender);
        this._evkodium = evkodium;
        this.density = 0;
        this.answer = {};
    }
    get evkodium() {
        let age = this.age;
        if (this.gender === 'male') {
            age *= 3;
        } else if (this.gender === 'female') {
            age *= 2;
        }
        this.density = age;
        this.answer['value'] = this._evkodium;
        this.answer['density'] = age;
        this.density = this.answer.value * this.answer.density;
        return this.answer;
    }

    toString() {
        let answer = '';
        let obj = this.evkodium;
        let evkodShit = obj.value * obj.density;
        answer+= `Turtle: ${this.name}\n`;
        answer+= `Aged - ${this.age}; Gender - ${this.gender}\n`;
        answer += `Evkodium: ${evkodShit}`;
        return answer
    }
}

module.exports = { EvkodianTurtle };