let Storage = require('./asynch-storage');
let data = new Storage();

//3rd task
data.put('Hello', 1);
data.put("It's me", 2);
data.put('I was wondering', 3);

//4th task
data.get('Hello', printSingle);

//5th task
data.getAll(printMultiple);

// //6th task
data.update('Hello', 4);
data.get('Hello', printSingle);

// //7th task
data.delete('Hello')
entries = data.getAll(printMultiple);

// //8th task
// data.clear();

// //9th task
data.save(uselessDone);

//10th task
data.load();
data.getAll(printMultiple);

function printSingle(data) {
    console.log(data);
}

function printMultiple(data) {
    for (const entry of data) {
        console.log(entry);
    }
}

function uselessDone(data) {
    console.log('done')
}