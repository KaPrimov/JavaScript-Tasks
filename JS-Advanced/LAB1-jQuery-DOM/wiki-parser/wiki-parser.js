function wikiParser(content) {

    let p = $(content);
    let val = p.text();

    let h3Regex = /===([^='\[]+?)===/g;
    let h2Regex = /==([^='\[]+?)==/g;
    let h1Regex = /=([^='\[]+?)=/g;
    let boldRegex = /'''([^='\[]+?)'''/g;
    let italicRegex = /''([^='\[]+?)''/g;
    let complexHyperlink = /\[\[([^'=\[\]]+?)\|([^'=\[\]]+?)]]/g;
    let simpleHyperlink = /\[\[([^'=\[\]]+?)]]/g;

    let replacedText = val
        .replace(h3Regex, (match, word) => `<h3>${word}</h3>`)
        .replace(h2Regex, (match, word) => `<h2>${word}</h2>`)
        .replace(h1Regex, (match, word) => `<h1>${word}</h1>`)
        .replace(boldRegex, (match, word) => `<b>${word}</b>`)
        .replace(italicRegex, (match, word) => `<i>${word}</i>`)
        .replace(complexHyperlink, (match, firstHyperlink, textHyperlink) => `<a href = "/wiki/${firstHyperlink}">${textHyperlink}</a>`)
        .replace(simpleHyperlink, (match, hyperlink) => `<a href = "/wiki/${hyperlink}">${hyperlink}</a>`);

    p.html(replacedText)
}