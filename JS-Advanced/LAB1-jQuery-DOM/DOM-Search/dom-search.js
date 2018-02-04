function domSearch(selector, boolean) {
    let fatherDiv = $(selector);
    fatherDiv.attr('class', 'items-control');

    let div1 = $('<div class="add-controls"></div>');
    let label1 = $('<label>Enter text: </label>');
    let input1 = $('<input>');
    let a1 = $('<a class="button" style="display: inline-block">Add</a>');

    label1.append(input1);
    div1.append(label1);
    div1.append(a1);
    fatherDiv.append(div1);

    let div2 = $('<div class="search-controls">');
    let label2 = $('<label>Search:</label>');
    let input2 = $('<input>');
    label2.on('input', function() {
        search()
    });

    label2.append(input2);
    div2.append(label2);
    fatherDiv.append(div2);

    let div3 = $('<div class="result-controls">');
    let ul = $('<ul class="items-list">');
    div3.append(ul);
    fatherDiv.append(div3);

    a1.on('click', function () {
        let textValue = input1.val();
        let li = $('<li class="list-item">');
        let deleteBtn = $('<a class="button">X</a>');
        let strong = $('<strong></strong>');
        strong.text(textValue);
        deleteBtn.on('click', function () {
            $(this).parent().remove();
            return false;
        });

        li.append(deleteBtn);
        li.append(strong);
        ul.append(li);
    });

    function search() {
        let searchVal;
       if(boolean) {
           searchVal = input2.val();
       } else {
           searchVal = input2.val().toLowerCase();
       }

       let allLi = $('.items-list li').each((index, item) => {
           "use strict";

           if(boolean) {
               if (item.textContent.indexOf(searchVal) !== -1) {
                   $(item).css('display', '');
               } else {
                   $(item).css('display', 'none');
               }
           } else {
               if (item.textContent.toLowerCase().indexOf(searchVal) !== -1) {
                   $(item).css('display', '');
               }else {
                   $(item).css('display', 'none');
               }
           }
       })
    }
}
