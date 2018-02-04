const Product = require('../models/Product')

module.exports.index = (req, res) => {
  Product.find({category: 'lamb'}).then((lambCategories) => {
    Product.find({category: 'beef'}).then((beefCategories) => {
      Product.find({category: 'chicken'}).then((chickenCategories) => {
        res.render('home/index', {
          lamb: lambCategories,
          beef: beefCategories,
          chicken: chickenCategories
        })
      }).catch(err => console.error(err))
    }).catch(err => console.error(err))
  }).catch(err => console.error(err))
}
