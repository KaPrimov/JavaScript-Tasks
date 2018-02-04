const fs = require('fs')

module.exports = (req, res) => {
  if (req.path.startsWith('/content')) {
    fs.readFile('.' + req.path, (err, data) => {
      if (err) {
        console.log(err)
        return
      }

      if (req.path.endsWith('.css')) {
        res.writeHead(200, {
          'content-type': 'text/css'
        })
      } else if (req.path.endsWith('.js')) {
        res.writeHead(200, {
          'content-type': 'application/javascipt'
        })
      } else if (req.path.endsWith('.html')) {
        res.writeHead(200, {
          'content-type': 'text/html'
        })
      } else if (req.path.endsWith('.png')) {
        res.writeHead(200, {
          'content-type': 'image/png'
        })
      } else if (req.path.endsWith('.jpeg')) {
        res.writeHead(200, {
          'content-type': 'image/jpeg'
        })
      }

      res.write(data)
      res.end()
    })
  } else {
    fs.readFile('./error.html', (err, data) => {
      if (err) {
        console.log(err.message)
        return
      }

      res.writeHead(404, {
        'content-type': 'text/html'
      })
      res.write(data)
      res.end()
    })
  }
}
