let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();



// console.log(`list = [${list}]`);
// list.add(4);
// list.add(2);
// list.add('sedem');
// list.add('gesho');
// let arr = list.toString();
// console.log(arr.length);
// console.log(typeof list);
// console.log(list.delete(3) + '');
// console.log(`list = [${list}]`);
// list.add("two");
// list.add(3);
// console.log(`list = [${list}]`);
// console.log("deleted: " + list.delete(1));
// console.log(`list = [${list}]`);
// console.log("cannot delete: " + list.delete(-1));
// console.log(`list = [${list}]`);


module.exports = { list };