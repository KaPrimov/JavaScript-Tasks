function quadraticEquation([a, b, c]) {
    a = Number(a);
    b = Number(b);
    c = Number(c);

    let D = b * b - 4 * a * c;

    if(D < 0){
        console.log('No');
    }
    else if (D === 0){
        console.log(-(b/(2*a)));
    }
    else {
        let x1 = ((-b + Math.sqrt(D)) / (2*a));
        let x2 = ((-b - Math.sqrt(D)) / (2*a));

        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    }


}

quadraticEquation(['6', '11', '-35']);