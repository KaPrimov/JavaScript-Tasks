function JSONToHTMLTable(json) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += "  <tr>";
    let check = 0;
    for (let key of Object.keys(arr[0]))
        html += `<th>${htmlEscape(key)}</th>`;
    html += "</tr>\n";
    for (let obj of arr) {
        for (let product in obj) {
            let iterations = Object.keys(obj).length;

            let toAddInTable = obj[product];
            if (check % iterations === 0){
                html+= '  <tr>';
            }
            if (typeof toAddInTable === 'number'){
                html += `<td>${toAddInTable}</td>`;
                check++;
            } else {
                html += `<td>${htmlEscape(toAddInTable)}</td>`;
                check++;
            }
            if (check % iterations === 0){
                html+= '</tr>\n';
            }
        }
        }
        console.log(html + "</table>");

        function htmlEscape(str) {
            let result = '';
            for (let i = 0; i < str.length; i++)
                if (str[i] === '<')
                    result += '&lt;';
                else if (str[i] === '>')
                    result += '&gt;';
                else if (str[i] === '"')
                    result += '&quot;';
                else if (str[i] === '\'')
                    result += '&#39;';
                else if (str[i] === '&')
                    result += '&amp;';
                else
                    result += str[i];

            return result.toString();
        }
    }



        JSONToHTMLTable([ '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]' ]);
[ '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}' ]
