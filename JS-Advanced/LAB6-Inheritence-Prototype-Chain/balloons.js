function solved() {
    class Balloon {
        constructor (color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon{
        constructor (color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }

        get _ribbon() {
            return this.ribbon
        }

    }

    class BirthdayBalloon extends PartyBalloon{
        constructor (color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get _text() {
            return this.text;
        }
    }
    return {Balloon: Balloon,
            PartyBalloon: PartyBalloon,
            BirthdayBalloon: BirthdayBalloon
    }
}

let balloon = new Balloon('red', 12);

let party = new PartyBalloon('red', 12, 'blue', 3);
let birthday = new BirthdayBalloon('red', 12, 'blue', 3, 'heeeey')
console.log(birthday.text);
