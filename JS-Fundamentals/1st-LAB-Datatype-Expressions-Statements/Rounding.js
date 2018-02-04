function Rounding([number, precision]) {
    number = Number(number);
    precision = Number(precision);
    let exactPrecision = 1;
    for (let i = 0; i < precision; i++) {
        exactPrecision *= 10;
    }
    let num = Math.round(number * exactPrecision) / exactPrecision;


    console.log(num);
}

Rounding(['10.5', '4']);