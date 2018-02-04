function asList(items) {
    console.log('<ul>');
    for(let item of items){
        console.log('  <li>' + htmlEscape(item) + '</li>');
    }
    console.log('</ul>');

    function htmlEscape(str) {
        let result = '';
        for (let ch of str)
            if (ch == '<')
                result += '&lt;';
            else if (ch == '>')
                result += '&gt;';
            else if (ch == '"')
                result += '&quot;';
            else if (ch == '\'')
                result += '&#39;';
            else if (ch == '&')
                result += '&amp;';
            else
                result += ch;

        return result;
    }

}


