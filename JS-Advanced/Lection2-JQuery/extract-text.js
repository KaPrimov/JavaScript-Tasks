function extractText() {
    let items = $('#items li').toArray().map(a => a.textContent).join(', ');

    $('#result').append(items)
}