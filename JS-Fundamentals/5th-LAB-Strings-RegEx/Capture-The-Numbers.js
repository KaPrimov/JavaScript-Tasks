function captureNumbers(arr) {
    let regex = /\d+/g;
    let text = arr.join('');
    let numbers = text.match(regex);
    console.log(numbers.join(' '));

}