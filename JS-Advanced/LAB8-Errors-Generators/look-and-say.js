function* lookAndSay(initialNum) {
    let num = '' + initialNum;
    while (true) {
        num = generateNumbers(num);
        yield num
    }

    function generateNumbers(num) {
        let result = '';
        for (let i = 0; i < num.length; i++) {
            let currentCount = 1;
            let currentDigit = num[i];
            for (let j = i + 1; j < num.length; j++) {
                if(num[i] === num[j]) {
                    currentCount++;
                } else {
                    i = j - 1;
                    break
                }
                i = j;
            }
            result += '' + currentCount + currentDigit;
        }
        return result
    }
}

let lookSequence = lookAndSay(113);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
