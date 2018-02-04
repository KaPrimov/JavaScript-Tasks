let Turtle = require('./turtle').Turtle;

class WaterTurtle extends Turtle {
    constructor(name,age,gender,waterPool) {
        super(name, age, gender);
        this.waterPool = waterPool;
    }

    get currentWaterPool() {
        return this.waterPool;
    }
    travel(waterPool) {
        this.waterPool = waterPool;
        this.age+=5;
    }
    toString() {
        let answer = '';
        answer+= `Turtle: ${this.name}\n`;
        answer+= `Aged - ${this.age}; Gender - ${this.gender}\n`;
        answer += `Currently inhabiting ${this.currentWaterPool}`;
        return answer;
    }
}

module.exports = { WaterTurtle };