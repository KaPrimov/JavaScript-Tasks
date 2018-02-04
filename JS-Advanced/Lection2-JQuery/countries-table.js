function initializeTable() {
    $('#createLink').click(createCountry);

    addCountry('Bulgaria', 'Sofia');
    addCountry('Italy', 'Rome');
    addCountry('Turkey', 'Ankara');
    function addCountry(country, capital) {
        let row = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveRowUp))
                .append($('<a href="#">[Down]</a>').click(moveRowDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        $('#countriesTable').append(row)
    }

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        addCountry(country, capital);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
    }
    
    function moveRowUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertBefore(row.prev());
            row.fadeIn();
        })
    }
    
    function moveRowDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertAfter(row.next());
            row.fadeIn()
        })
    }
    
    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
        })
    }
    function fixRows() {
        $('')
    }
}