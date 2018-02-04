function generateMatrix(arr) {
    let dim = arr[0].split(' ');
    let n = Number(dim[0]);
    let total = n*n;
    let result= [];

    for(let i=0;i<n;i++) {
        let rs = [];
        for(let j=0;j<n;j++) {
            rs.push(0);
        }
        result.push(rs);
    }

    let x=0;
    let y=0;
    let step = 0;
    for(let i=0;i<total;){
        while(y+step<n){
            i++;
            result[x][y]=i;
            y++;

        }
        y--;
        x++;

        while(x+step<n){
            i++;
            result[x][y]=i;
            x++;
        }
        x--;
        y--;

        while(y>=step){
            i++;
            result[x][y]=i;
            y--;
        }
        y++;
        x--;
        step++;

        while(x>=step){
            i++;
            result[x][y]=i;
            x--;
        }
        x++;
        y++;
    }
    console.log(result.map(row => row.join(' ')).join('\n'));

}

generateMatrix(['5 5']);