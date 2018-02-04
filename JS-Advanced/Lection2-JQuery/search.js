function search() {
    let searchedText = $('#searchText').val();
    let matches = 0;
    $('#towns li').each((index, li) => {
        if(li.textContent.includes(searchedText)) {
            $(li).css('font-weight', 'bold');
            matches++
        }
    });
    $('#result').text(matches + ' matches found')

}
