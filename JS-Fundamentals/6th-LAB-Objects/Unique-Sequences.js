function unique(input) {
    let arrayArray = [];
    for (let array of input) {
        let arrayWithNumbers = array.split(/,|\[|\]|'/).map(Number);
        arrayWithNumbers = arrayWithNumbers.splice(1, arrayWithNumbers.length - 2)
            .sort((a, b) => {
                return b - a
            });
        arrayArray.push(arrayWithNumbers);

    }
    let setArr = new Set();
    let index = 0;
    let answer = [];


    for (let i = 0; i < arrayArray.length; i++) {
        let strArray = arrayArray[i].toString();
        setArr.add(strArray);
    }


    for (let value of setArr) {
        answer.push(value);
    }

    for (let i = 0; i < answer.length; i++) {
        answer[i] = answer[i].replace(/,/g,', ');
        console.log('[' + answer[i] + ']');

    }
}

unique([ '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]' ]);