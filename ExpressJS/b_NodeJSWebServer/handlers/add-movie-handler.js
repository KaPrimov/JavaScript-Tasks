const fs = require('fs')
const url = require('url')
const multiparty = require('multiparty')
var querystring=require('querystring');
let db = require('../config/dataBase')
let check = 1

module.exports = (req, res) => {
    if (req.path === '/addMovie' && req.method === 'GET') {      
      fs.readFile('./views/addMovie.html', (err, data) => {
        if (err) {
          console.log(err.message)
          return
        }

        res.writeHead(200, {
          'content-type': 'text/html'
        })
        res.write(data)
        res.end()
      })
    } else if (req.path === '/addMovie' && req.method === 'POST') {
      var chunk = '';
      req.on('data', function (data) {
          chunk += data;
      });
      req.on('end', function () {         
          if (chunk.movieTitle == '' || chunk.moviePoster == '') {
            fs.readFile('./views/addMovie.html', (err, data) => {
              if (err) {
                console.log(err.message)
                return
              }        
              res.writeHead(200, {
                'content-type': 'text/html'
              })
              res.write(data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>'))
              res.end()
            })
          } else {
            let movie = {
              movieTitle: chunk.movieTitle,
              movieYear: chunk.movieYear,
              moviePoster: chunk.moviePoster,
              movieDescription: chunk.movieDescription
            }
            db.push(movie)
            // fs.writeFile('./config/dataBase.json', JSON.stringify(db), (err) => {
            //   if (err) console.log(err)
            // }) // add to save to file
            fs.readFile('./views/addMovie.html', (err, data) => {
              if (err) {
                console.log(err.message)
                return
              }
      
              res.writeHead(200, {
                'content-type': 'text/html'
              })
              res.write(data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>'))
              res.end()
            })
          }
      });
    } else {
      return true
  }
}
