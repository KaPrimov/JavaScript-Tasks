class Stringer {
    constructor(string, length){
        this.string = string;
        this.length = length;
    }

    get innerString() {
        return this.string;
    }

    get innerLength() {
        return this.length
    }

    increase(len) {
        this.length += len
    }

    decrease(len) {
        this.length -= len;
        if (this.length < 3) {
            this.length = 0;
        }
    }

    toString() {
        if (this.string.length <= this.length) {
            return this.string;
        } else if (this.length === 0) {
            return "...";
        } else {
            return this.string.substr(0, this.length) + '...';
        }

    }
}

let string = new Stringer('hello', 5);
string.decrease(2);
console.log(string.innerString);
console.log(string.toString());