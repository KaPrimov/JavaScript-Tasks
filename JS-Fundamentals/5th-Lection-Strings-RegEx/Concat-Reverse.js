function concatAnReverse(arr) {
    let allString = arr.join('');
    let chars = Array.from(allString);
    let reverse = chars.reverse();
    return reverse.join('');
}