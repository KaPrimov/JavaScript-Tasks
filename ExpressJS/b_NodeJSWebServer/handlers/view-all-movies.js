const fs = require('fs')
let db = require('../config/dataBase')

module.exports = (req, res) => {
  if (req.path === '/viewAllMovies' && req.method === 'GET') {
    fs.readFile('./views/viewAll.html', (err, data) => {
      if (err) {
        console.log(err.message)
        return
      }
      let body = ''
      let id = 0

      for (let movie of db) {
        body += `<a href="/movies/details/${id}"><div class="movie">
            <img class="moviePoster" src=${movie.moviePoster}/>
            </div></a>`
        id++
      }

      res.writeHead(200, {
        'content-type': 'text/html'
      })
      res.write(data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', body))
      res.end()
    })
  } else {
    return true;
  }
}