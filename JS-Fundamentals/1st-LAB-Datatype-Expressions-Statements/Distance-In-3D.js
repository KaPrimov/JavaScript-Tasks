function distanceIn3D([x1, y1, z1, x2, y2, z2]) {
    [x1, y1, z1, x2, y2, z2] = [x1, y1, z1, x2, y2, z2].map(Number);
    let xs = Math.pow((x1 - x2),2);
    let ys = Math.pow((y1 - y2),2);
    let zs = Math.pow((z1 - z2),2);

    let distance = Math.sqrt(xs + ys + zs);

    console.log(distance);
}

distanceIn3D(['-7', '-4','3', '17', '-4', '3']);