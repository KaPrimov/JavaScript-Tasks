function mathAllWords(input) {
    if (Array.isArray(input)) {
        input = input[0];
    }
    let words = input.match(/\w+/g);
    return words.join('|')
}