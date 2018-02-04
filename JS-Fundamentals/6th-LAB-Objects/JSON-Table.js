function JSONToTable(json) {
    let html = "<table>\n";
    let arr = Array.from(json);
    let check = 1;
    for (let obj in arr) {
        for (i = 0; i < 3; i++){
        let line = JSON.parse(arr[obj]);
        if (check % 3 === 1) {
            html += `  <tr>\n    <td>${htmlEscape(line['name'])}</td>\n`;
        } else if (check % 3 === 2) {
            html += `     <td>${htmlEscape(line['position'])}</td>\n`;
        } else {
            html += `     <td>${line['salary']}</td>\n`;
        }
        check++;
        }
        html += "  <tr>\n";
    }
    console.log(html + '</table>');

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

}




JSONToTable(['{"name":"Pesho>","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);