function emailExtracter(input) {
    let regex = /(www)\.([A-Za-z0-9-]+)(\.[a-z]+)+/g;
    let matches, result = [];
    for (let sentence of input) {
        while (matches = regex.exec(sentence)) {
            result.push(matches[0])
        }
    }
    console.log(result.join('\n'));
}

emailExtracter([ 'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko' ]);