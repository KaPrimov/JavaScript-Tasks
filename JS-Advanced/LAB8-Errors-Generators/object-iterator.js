function makeIterable(object) {
    let keys = Object.keys(object);
    let index = keys.length-1;
    return {
        next: function () {
            let keysToPrint = Object.keys(object);
            keysToPrint.sort((a, b) => a.localeCompare(b));
            if(index >= 0) {
                return {value: keysToPrint[index--], done: false}
            } else {
                return {done: true}
            }
        }
    }
}
let obj = {age: 27, name: "pesho", book: "Lord of the Rings"};
let iterator = makeIterable(obj);
while(true){
    let res = iterator.next();
    if(res.done) break;
    console.log(res.value);
}

