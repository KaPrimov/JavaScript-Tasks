function solved() {
    let collection = [];
    return {

        add: function add(element) {
            collection.push(element);
            this.size++;
            return collection.sort((a, b) => a - b);

        },

        remove: function remove(index) {
            if (collection.length > index && index >= 0) {
                collection.splice(index, 1);
                this.size--;
                return collection.sort((a, b) => a - b);
            } else {
                throw 'error'
            }


        },

        get: function get(index) {
            if (index >= 0 && index <= this.size){
                return collection[index]
            } else {
                throw 'error'
            }

        },

        size: 0

    };
}
// let arr = [1, 2, 3];
// // console.log(collection(arr).add(0));

console.log();


