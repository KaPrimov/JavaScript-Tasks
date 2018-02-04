function solved() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        toString() {
            let answer = '';
            answer += `Element: ${this.element}\n`;
            answer+= `Sort: ${this.melonSort}\n`;
            answer += `Element Index: ${this._elementIndex}`;

            return answer;

        }

        get elementIndex() {
            return this._elementIndex
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = melonSort.length * weight;
            this.element = 'Water'
        }

    }

    class Firemelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = melonSort.length * weight;
            this.element = 'Fire'
        }

    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = melonSort.length * weight;
            this.element = 'Earth'
        }
    }
    class Airmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = melonSort.length * weight;
            this.element = 'Air;'
        }
    }

    let arr = ['Fire', 'Earth', 'Air', 'Water'];

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = melonSort.length * weight;
            this.element = 'Water'
        }

        morph() {
            this.element = arr[0];
            let lastEL = arr.shift();
            arr.push(lastEL);
            console.log(arr);
        }
    }

    return { Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
}

let test = new Melon(100, "Test");

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());


// let theMelon = new Melonmelon(12, 'tesy');
// theMelon.morph();
// theMelon.morph();
// theMelon.morph();
// console.log(theMelon.toString());