function magicMatrix(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));

    let arrRows = 0;
    let arrCols = 0;
    
    let areRowsEqual = false;
    let areColsEqual = false;

    arrRows = matrix.map( (row) => row.reduce((a, b) => { return a + b}, 0));

    arrCols = matrix.map(function (row, i) {
        return matrix.map(function (row) {
            return row[i]
        }).reduce(function (a, b) {
            return a+b;
        }, 0);
    });

    areColsEqual = identical(arrCols);
    areRowsEqual = identical(arrRows);

    if(areRowsEqual === true && areColsEqual === true) {
        console.log('true');
    } else {
        console.log('false');
    }

    function identical(array) {
        for(var i = 0; i < array.length - 1; i++) {
            if(array[i] !== array[i+1]) {
                return false;
            }
        }
        return true;
    }
}

magicMatrix(['11 32 45',
    '21 0 1',
    '21 1 1']

);