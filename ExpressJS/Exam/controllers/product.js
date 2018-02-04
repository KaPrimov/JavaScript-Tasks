const Product = require('../models/Product')

module.exports = {
  create: {
    get: (req, res) => {
      res.render('product/create')
    },
    post: (req, res) => {
      let data = req.body
      let productToAdd = {}
      productToAdd.category = data.category
      productToAdd.image = data.imageUrl
      productToAdd.size = data.size
      productToAdd.toppings = data.toppings.trim().split(/[ ,]+/).filter(e => e !== '' && e !== ' ')
      console.log(productToAdd.toppings.length)
      Product.create(productToAdd).then(product => {
        res.redirect('/')
      }).catch(err => console.error(err))
    }
  }
}
