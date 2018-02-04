let Turtle = require('./turtle').Turtle;

class GalapagosTurtle extends Turtle {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.thingsEaten = [];
    }
    eat(food) {
        this.thingsEaten.push(food);
    }

    grow(age) {
        this.age += age;
        this.thingsEaten = [];
    }
    toString() {
        let answer = '';
        answer+= `Turtle: ${this.name}\n`;
        answer+= `Aged - ${this.age}; Gender - ${this.gender}\n`;
        answer += `Things, eaten this year: ${this.thingsEaten.join(', ')}`;
        return answer;
    }
}

module.exports = { GalapagosTurtle };