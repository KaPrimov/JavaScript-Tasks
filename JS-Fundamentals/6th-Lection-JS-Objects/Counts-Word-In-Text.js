function countWords(arr) {
    let text = arr.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let wordsCount = {};
    for (let word of words) {
        wordsCount[word] ? wordsCount[word]++ : wordsCount[word] = 1;
    }
    return JSON.stringify(wordsCount);
}

countWords(['JS and Node.js', 'JS again and again', 'Oh, JS?'])
