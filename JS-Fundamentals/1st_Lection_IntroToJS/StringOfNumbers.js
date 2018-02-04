function StringOfNumbers([num]) {
    let str = '';
    for(let i=1; i<=num; i++){
        str += i;
    }
    console.log(str)
}

StringOfNumbers([10]);