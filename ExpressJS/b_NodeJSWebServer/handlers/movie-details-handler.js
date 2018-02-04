const regexPattern = new RegExp(/\/movies\/details\/(\d+)/)
const db = require('../config/dataBase')
const fs = require('fs')

module.exports = (req, res) => {
    let match = req.path.match(regexPattern);
    if (match !== null && req.method === 'GET') {
        fs.readFile('./views/details.html', (err, data) => {
            if (err) {
                console.log(err.message)
                return
            }

            let movie = db[parseInt(match[1])]
            let movieDetailsHtml = `<div class="content">
        <img src="${movie.moviePoster}" alt=""/>
        <h3>Title  ${movie.movieTitle}</h3>
        <h3>Year ${movie.movieYear}</h3 >
            <p> ${movie.movieDescription}</p>
    </div > `

            res.writeHead(200, {
                'content-type': 'text/html'
            })
            res.write(data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', movieDetailsHtml))
            res.end()
        })
    } else {
        return true
    }
}