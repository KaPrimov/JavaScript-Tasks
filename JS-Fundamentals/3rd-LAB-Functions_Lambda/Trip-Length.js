function solved([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    function checkTheDistance(coordx1, coordy1, coordx2, coordy2) {
        let squares = Math.pow(coordx2 - coordx1, 2) + Math.pow(coordy2 - coordy1, 2);
        return Math.sqrt(squares);
    }

    let distAtoB1 = checkTheDistance(x1, y1, x2, y2);
    let distBtoC2 = checkTheDistance(x2, y2, x3, y3);
    let distAtoC3 = checkTheDistance(x1, y1, x3, y3);




    if (Math.min(distAtoB1 + distBtoC2, distAtoB1 + distAtoC3, distBtoC2 + distAtoC3) === distAtoB1 + distBtoC2){

            console.log(`1->2->3: ${distAtoB1 + distBtoC2}`);

        // else {
        //     console.log(`2->1->3: ${distAtoB1 + distBtoC2}`);
        // }
    } else if (Math.min(distAtoB1 + distBtoC2, distAtoB1 + distAtoC3, distBtoC2 + distAtoC3) === distAtoB1 + distAtoC3) {
        console.log(`2->1->3: ${distAtoB1 + distAtoC3}`);
    } else {
        console.log(`1->3->2: ${distAtoC3 + distBtoC2}`);
    }

}

solved(['5', '1', '1', '1', '5', '4']);