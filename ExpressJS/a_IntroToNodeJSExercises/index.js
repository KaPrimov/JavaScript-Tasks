let Storage = require('./storage.js');
let data = new Storage();

//3rd task
data.put('Hello', 1);
data.put("It's me", 2);
data.put('I was wondering', 3);

//4th task
console.log(data.get('Hello'));

//5th task
let entries = data.getAll();
for (const entry of entries) {
    console.log(entry);
}

//6th task
data.update('Hello', 4);
console.log(data.get('Hello'));

//7th task
// data.delete('Hello')
entries = data.getAll();
for (const entry of entries) {
    console.log(entry);
}

//8th task
// data.clear();

//9th task
data.save();

//10th task
data.load();
entries = data.getAll();
for (const entry of entries) {
    console.log(entry);
}
