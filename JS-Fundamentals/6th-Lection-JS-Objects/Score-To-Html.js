function scoreToHTML(scoreJSON) {
    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th>\n';
    let arr = JSON.parse(scoreJSON);
    for (let obj of arr) {
        html += '  <tr>';
        html += `<td>${htmlEscape(obj["name"])}</td>`;
        html += `<td>${htmlEscape(obj["score"])}</td>`;
        html += '</tr>\n';
    }

    console.log(html + '</table>');

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

}

scoreToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);
//scoreToHTML(['[{"name":"Pesho","score":70}]'])
