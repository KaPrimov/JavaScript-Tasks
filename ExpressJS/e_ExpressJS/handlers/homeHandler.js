const fs = require('fs')
const url = require('url')
const path = require('path')
const Meme = require('../models/Meme')

module.exports.index = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname
  let filePath = path.normalize(
    path.join(__dirname, '../views/home/home.pug'))

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err)

      res.writeHead(404, {
        'Content-Type': 'text/plain'
      })

      res.write('404 not found!')
      res.end()
      return
    }

    Meme.find({}).then((memes) => {
      res.render('../views/home/home.pug', { memes: memes })
    })
  })
}
