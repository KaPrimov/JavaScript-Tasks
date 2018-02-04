function addRemoveElement(arr) {
    let res = [1];
    let currentNum = 2;
    for (let i = 1; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'add') {
            res.push(currentNum);
            currentNum ++;
        } else {
            res.pop();
            currentNum++;
        }
    }

    if (res.length === 0) {
        console.log('Empty');
    } else {
        for (let i = 0; i < res.length; i++) {
            console.log(res[i]);
        }
    }
}

addRemoveElement(['add', 'add', 'remove', 'add', 'add']);