const url = require('url')
const fs = require('fs')
const path = require('path')
const Product = require('../models/Product')

module.exports.index = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname
  let filePath = path.normalize(
    path.join(__dirname, '../views/home/index.pug'))

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

    Product.find({}).populate('category').then((products) => {
      let queryData = req.query

      if (queryData.query) {
        products = products.filter(p => p.name.toLowerCase()
          .indexOf(queryData.query) !== -1)
      }

      let data = { products: products }
      if (req.query.error) {
        data.error = req.query.error
      } else if (req.query.success) {
        data.success = req.query.success
      }
      res.render('../views/home/index.pug', data)
    })
  })
}

