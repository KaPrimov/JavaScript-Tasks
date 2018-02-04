function * lookAndSay(start) {
    let start = start.toString();
    for (let i = 0; i < start.length; i++) {
        let obj = {};

    }
    yield nextElement;
}

// let lookSequence = lookAndSay(1);
// console.log(lookSequence.next().value);
// console.log(lookSequence.next().value);
// console.log(lookSequence.next().value);
// console.log(lookSequence.next().value);
// console.log(lookSequence.next().value);


let lookSequence = lookAndSay(113);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
