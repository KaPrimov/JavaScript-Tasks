const fs = require('fs')

module.exports = (req, res) => {
    if (req.path === '/') {   
      fs.readFile('./views/home.html', (err, data) => {
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
    } else {
        return true
    }
}
