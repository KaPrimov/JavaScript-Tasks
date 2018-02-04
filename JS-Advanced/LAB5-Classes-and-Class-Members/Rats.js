class Rat {
    constructor(name) {
        this.name = name;
        this.rats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat);
        }
    }

    getRats() {
        return this.rats
    }

    toString() {
        let answer = '';
        answer += this.name + '\n';
        for (let rat of this.rats){
            answer += `##${rat}\n`
        }
        return answer;
    }
}

let ivan = new Rat('Ivan');
let peshko = new Rat('Pesho');

ivan.unite(peshko);

console.log(ivan.toString());

