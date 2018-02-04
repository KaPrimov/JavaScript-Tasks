let Turtle = require('./turtle').Turtle;
let toString = require('./turtle').Turtle.toString();

class NinjaTurtle extends Turtle {
    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);
        this.maskColor= maskColor;
        this.weapon = weapon;
        this.level = 0;
    }
    grow(age) {
        this.age += age;
        this.level += age;
    }
    toString() {
        let answer ='' ;
        answer+= `Turtle: ${this.name}\n`;
        answer+= `Aged - ${this.age}; Gender - ${this.gender}\n`;
        let threeLetters = this.name.substr(0, 3);
        if (this.age < 25) {
            answer += `${threeLetters} wears a ${this.maskColor} mask, and is an apprentice with the ${this.weapon}.`
        } else if (this.age < 100) {
            answer += `${threeLetters} wears a ${this.maskColor} mask, and is smokin strong with the ${this.weapon}.`
        } else {
            answer += `${threeLetters} wears a ${this.maskColor} mask, and is BEYOND GODLIKE with the ${this.weapon}.`
        }
        return answer;
    }
}

module.exports = { NinjaTurtle };