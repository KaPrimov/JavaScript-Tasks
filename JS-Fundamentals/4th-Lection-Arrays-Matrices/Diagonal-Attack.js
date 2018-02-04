function diagonalAttack(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    let mainSum = 0, secondarySum = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let secDiag = [];


    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length-row-1];
        secDiag.push(matrix[row][matrix.length-row-1]);
    }
    if (mainSum != secondarySum) {
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
    else {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                if (i != j ) {
                    matrix[i][j] = mainSum;
                }
            }
        }
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][matrix.length-row-1] = secDiag[row]

        }

        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']

);