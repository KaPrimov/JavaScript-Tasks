function* fibonacci(seed) {
    let a = 1;
    let b = 0;
    let temp;
    while (true){
        temp = a;
        a = a+b;
        b = temp;
        yield b;
    }

}

let fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
