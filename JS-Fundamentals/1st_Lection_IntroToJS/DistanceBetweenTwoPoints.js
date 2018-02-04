function distanceBetweenTwoPoints([x1, y1, x2, y2]) {
    let A = {x:x1, y:y1};
    let B = {x:x2, y:y2};

    let distX = Math.pow((A.x - B.x),2);
    let distY = Math.pow((A.y - B.y),2);

    return Math.sqrt(distX + distY);
}