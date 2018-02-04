const db = require('../config/dataBase')
const fs = require('fs')

module.exports = (req, res) => {
    const headers = req.headers
    const statusHeader = headers['StatusHeader']
    if (statusHeader === 'Full') {
        fs.readFile('./views/status.html', (err, data) => {
            if (err) {
                console.log(err.message)
                return
            }

            res.writeHead(200, {
                'content-type': 'text/html'
              })
              res.write(data.toString().replace('{{replaceMe}}', db.length))
              res.end()
        })
    } else {
        return true
    }
}