function processOddNumbers(arr) {
    let result = arr.filter((num, i ) => i % 2 == 1).map(x => x * 2).reverse();
    return result.join(' ')
}