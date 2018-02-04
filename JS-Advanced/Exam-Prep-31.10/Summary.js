function summary(selector) {
   $(selector).on('click', function () {
      let text = $('#content').find('strong').text();
       let div = $('<div id="summary">');
       let summary = $('<h2>Summary</h2>');
       let p = $('<p>').text(text);
       $(div).append(summary).append(p);
       $('#content').parent().append(div)
   })
}