function checker([x1, y1, x2, y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);
    function checkTheDistance(x1, y1, x2, y2) {
        let squares = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
        let dist = Math.sqrt(squares);
        if(Number.isInteger(dist)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    checkTheDistance(x1, y1, 0, 0);
    checkTheDistance(x2, y2, 0, 0);
    checkTheDistance(x1, y1, x2, y2);
}