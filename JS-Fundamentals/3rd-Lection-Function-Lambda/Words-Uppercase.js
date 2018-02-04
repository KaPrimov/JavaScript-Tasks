function wordsUppercase([arr]) {
    let strUpper = arr.toUpperCase();
    let answerWords = extractWords();
    answerWords = answerWords.filter(w => w != '');
    return answerWords.join(', ');
    function extractWords() {
        return strUpper.split(/\W+/);
    }
}