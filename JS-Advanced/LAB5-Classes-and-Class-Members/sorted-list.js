class Sorted {
    constructor() {
        this.storage = [];
        this.size = 0;
    }

    add(element) {
        this.storage.push(element);
        this.size++;
        this._sort();
    }

    remove(index) {
        if (index >= 0 && index < this.storage.length) {
            this.storage.splice(index, 1);
            this._sort();
            this.size--;
        } else {
            throw  new Error
        }
    }

    get(index) {
        if (index >= 0 && index < this.storage.length) {
            return this.storage[index];
        } else {
            throw new Error;
        }
    }

    _sort() {
        this.storage = this.storage.sort((a, b) => a - b);
    }
}

let list = new Sorted();
list.add('6');
list.add('3');
console.log(list.get(1));

