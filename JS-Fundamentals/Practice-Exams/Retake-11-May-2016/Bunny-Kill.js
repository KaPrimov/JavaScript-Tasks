function bunnyKill(input) {
    let bombBunnies = input.pop().split(' ');

    let matrix = [];

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' ').map(Number);
        matrix.push(currentRow);
    }

    function isInMatrix(matrix, row, column) {
        if ((row >=0 && row < matrix.length) && (column >=0 && column < matrix[row].length)) {
            return true
        }
        return false
    }


    function explode(matrix, bombRow, bombCol, bombDmg) {
        for (let row = bombRow-1; row <= bombRow+1 ; row++) {
            for (let col = bombCol-1; col <= bombCol+1; col++) {
                if(isInMatrix(matrix, row, col)){
                    matrix[row][col] -= bombDmg;
                }
            }
        }
        return matrix;
    }

    let snowballDmg = 0;
    let snowballKills = 0;

    for (let i = 0; i < bombBunnies.length; i++) {
        let currentBombBunny = bombBunnies[i].split(',').map(Number);

        let bombRow = currentBombBunny[0];
        let bombCol = currentBombBunny[1];

        let bombDmg = matrix[bombRow][bombCol];
        if (bombDmg > 0) {
            snowballDmg += bombDmg;
            snowballKills++;

            explode(matrix, bombRow, bombCol, bombDmg);
        }

    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let obj = snowballDmg[col];

            let currentCell = matrix[row][col];

            if(currentCell > 0) {
                snowballDmg += currentCell;
                snowballKills ++;
            }
        }
    }

    console.log(snowballDmg);
    console.log(snowballKills);

}