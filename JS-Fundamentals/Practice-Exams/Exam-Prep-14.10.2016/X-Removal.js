function xRemoval(arr) {
    var matrix = [];
    var resultMatrix = [];

    arr.forEach(function(string) {
        matrix.push(string.toLowerCase().split(''));
        resultMatrix.push(string.split(''));
    });

    for (let row = 0; row < matrix.length - 2; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let char = matrix[row][col];
            let isX = matrix[row][col + 2] === char &&
                matrix[row + 1][col + 1] === char &&
                matrix[row + 2][col] === char &&
                matrix[row + 2][col + 2] === char;
            if(isX){
                resultMatrix[row][col] = ' ';
                resultMatrix[row+1][col+1] = ' ';
                resultMatrix[row][col+2] = ' ';
                resultMatrix[row+2][col] = ' ';
                resultMatrix[row+2][col+2] = ' ';
            }
        }
    }

    let resultArr =[];
    resultMatrix.forEach((str) => resultArr.push(str.join('').split(' ').join('')));

    resultArr.forEach((item) => console.log(item));
}

let arr = [ 'abnbjs', 'xoBab', 'Abmbh', 'aabab', 'ababvvvv' ];
xRemoval(arr);
