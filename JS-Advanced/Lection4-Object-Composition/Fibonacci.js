function solved(n) {
    let fib = (function () {
        let f0 = 0, f1 = 1;
        return function () {
            let old0 = f0; // old0 = 1
            let old1 = f1; // old1 = 2
            f0 = old1;    // f0= 2
            f1 = old0 + old1; // f1 = 2
            return f0;
        }
    })();

    let fibNumbers = [];
    for (let i = 0; i < n; i++) {
        fibNumbers.push(fib())
    }
    return fibNumbers
}

solved(5);