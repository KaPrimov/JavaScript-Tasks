function triangleOfDollars(arr) {
    let size = Number(arr[0]);


    for (let row = 1; row <= size; row++) {
        let line = '';
        for (let i = 1; i <= row; i++) {
            line += '$'
        }
        console.log(line);
    }
}

triangleOfDollars(['3']);