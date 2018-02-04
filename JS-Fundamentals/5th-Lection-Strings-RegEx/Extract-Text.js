function extractText([text]) {
    let result = [];
    let startIndx = text.indexOf('(');
    while (startIndx > -1) {
        let endIndx = text.indexOf(')', startIndx);
        if (endIndx == -1) {
            break;
        }
        let searchedText = text.substring(startIndx + 1, endIndx);
        result.push(searchedText);
        startIndx = text.indexOf('(', endIndx);
    }
    console.log(result.join(', '));

}