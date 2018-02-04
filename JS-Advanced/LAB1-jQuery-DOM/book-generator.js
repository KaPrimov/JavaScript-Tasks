(function createBook() {
    let counter = 1;
    return function (selector, title, author, ISBN) {
        let container = $(selector);
        let fragment = document.createDocumentFragment();

        let bookDiv = $('<div>');
        let titleP = $('<p>');
        let authorP = $('<p>');
        let isbnP = $('<p>');
        let selectBtn = $('<button>Select</button>');
        let deselectBtn = $('<button>Deselect</button>');


        bookDiv.attr('id', 'book'+ counter);
        counter++;
        bookDiv.css('border', 'medium none');
        titleP.addClass('title');
        titleP.text(title);
        authorP.addClass('author');
        authorP.text(author);
        isbnP.addClass('isbn');
        isbnP.text(ISBN);


        selectBtn.on('click', function () {
            bookDiv.css('border', '2px solid blue')
        });

        deselectBtn.on('click', function () {
            bookDiv.css('border', 'none')
        });

        bookDiv.append(titleP);
        bookDiv.append(authorP);
        bookDiv.append(isbnP);
        bookDiv.append(selectBtn);
        bookDiv.append(deselectBtn);

        bookDiv.appendTo(fragment);

        container.append(fragment);
    }

}());