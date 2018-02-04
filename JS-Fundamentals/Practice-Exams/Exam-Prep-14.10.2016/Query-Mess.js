function queryMess(arr) {
    for (let line of arr) {
        let obj = {};

        line = line.replace(/.+?(?=\?)(\?)+/g, '');
        line = line.replace(/%20/g, ' ');
        line = line.replace(/\+/g, ' ');
        line = line.replace(/\s{2,}/g, ' ').trim();
        line = line.split('&');
        for (let i = 0; i < line.length; i++) {
            let currentProperty = line[i].split('=');
            let key = currentProperty[0].trim();
            let value = currentProperty[1].trim();
            obj[key] = (obj[key] ? obj[key] + ', ' : '') + value;
        }
        let arr = [];
        for(let key in obj) {
            arr += key + '=['+ obj[key]+']';
        }
        console.log(arr);
    }
}



// let arr = [ 'field=value1&field=value2&field=value3',
//     'http://example.com/over/there?name=ferret' ];
// let arr = [ 'foo=%20foo&value=+val&foo+=5+%20+203',
//     'foo=poo%20&value=valley&dog=wow+',
//     'url=https://softuni.bg/trainings/coursesinstances/details/1070',
//     'https://softuni.bg/trainings?trainer=nakov&course=oop&course=php' ];

let arr = [ 'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings?trainer=nakov&course=oop&course=php' ]

queryMess(arr);