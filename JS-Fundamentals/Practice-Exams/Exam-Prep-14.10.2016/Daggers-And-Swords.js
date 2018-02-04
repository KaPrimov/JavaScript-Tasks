function daggersAndSwords(input) {
    let html = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n';
    html += '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n  </thead>\n';
    html += '<tbody>\n';
    for (let i = 0; i < input.length; i++) {
        let bladeSwordOrDagger = '';
        let bladeType = '';
        let bladeSize = parseInt(Number(input[i]));

        if(bladeSize > 40) {
            bladeSwordOrDagger = 'sword';
        } else {
            bladeSwordOrDagger ='dagger';
        }

        if (bladeSize % 5 === 1) {
            bladeType = 'blade'
        } else if (bladeSize % 5 === 2) {
            bladeType = 'quite a blade'
        } else if(bladeSize % 5 === 3) {
            bladeType = 'pants-scraper'
        } else if(bladeSize % 5 === 4) {
            bladeType = 'frog-butcher'
        } else {
            bladeType = '*rap-poker'
        }

        if (bladeSize > 10) {
            html += `<tr><td>${bladeSize}</td><td>${bladeSwordOrDagger}</td><td>${bladeType}</td></tr>\n`
        }
    }
    html += '</tbody>\n</table>';
    console.log(html);
}

let arr =[ '17.8', '19.4', '13', '55.8', '126.96541651', '3' ];

daggersAndSwords(arr);