function countWords(input) {
    let words = input.join('/n').toLowerCase()
        .split(/[^A-Za-z0-9]+/)
        .filter( w => w != '');
    let wordsCount = new Map();
    for (let word of words) {
        wordsCount.has(word) ? wordsCount.set(word, wordsCount.get(word) + 1) : wordsCount.set(word, 1);
    }
    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach( word => console.log(`${word} -> ${wordsCount.get(word)} times `))
}

countWords(['JS and Node.js', 'JS again and again', 'Oh, JS?']);
