function censor(input) {
    let text = input[0];
    let words = input.slice(1);
    for (let current of words) {
        let toReplaceWith = '-'.repeat(current.length);
        let regex = new RegExp(current, 'g');
        text = text.replace(regex, toReplaceWith);
    }
    return text;
}