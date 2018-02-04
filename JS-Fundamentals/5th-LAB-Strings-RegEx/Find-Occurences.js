function findOccurrences([str, word]) {
    let regex = '\\b'+word+'\\b';
    let pattern = new RegExp(regex, 'ig');
    let match = str.match(pattern);
    if(match != null) {
        console.log(match.length);

    } else {
        console.log('0');
    }
}

findOccurrences(['The waterfall was so high, that the child couldn’t see its peak.',
    'thehg']
);