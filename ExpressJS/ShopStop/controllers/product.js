const url = require('url')
const fs = require('fs')
const path = require('path')
const Product = require('../models/Product')
const Category = require('../models/Category')

module.exports.addGet = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname

  let filePath = path.normalize(
    path.join(__dirname, '../views/products/add.pug'))

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err)
    }
    Category.find().then((categories) => {
      res.render('../views/products/add.pug', { categories: categories })
    })
  })
}

module.exports.addPost = (req, res) => {
  let productObj = req.body
  productObj.image = '\\' + req.file.path
  productObj.creator = req.user._id

  Product.create(productObj).then((product) => {
    Category.findById(product.category).then((category) => {
      category.products.push(product._id)
      category.save()
      res.redirect(`/?success=${encodeURIComponent('Product was added sucessfully')}`)
    }).catch(err => console.log(err))
  }).catch(err => console.log(err))
}

module.exports.editGet = (req, res) => {
  let id = req.params.id

  Product.findById(id).then(product => {
    if (!product) {
      res.sendStatus(404)
      return
    }
    if (product.creator.equals(req.user._id) ||
      req.user.roles.indexOf('Admin') >= 0) {
      Category.find().then(categories => {
        res.render('products/edit', {
          product: product,
          categories: categories
        })
      })
    } else {
      res.render('/', { error: 'You do not have the permissions!' })
    }
  })
}

module.exports.editPost = (req, res) => {
  let id = req.params.id
  let editedProduct = req.body

  Product.findById(id).then(product => {
    if (!product) {
      res.redirect(
        `/?error${encodeURIComponent('error=Product was not found!')}`
      )
      return
    }
    if (product.creator.equals(req.user._id) ||
      req.user.roles.indexOf('Admin') >= 0) {
      product.name = editedProduct.name
      product.description = editedProduct.description
      product.price = editedProduct.price

      if (req.file) {
        product.image = '\\' + req.file.path
      }

      if (product.category.toString() !== editedProduct.category) {
        Category.findById(product.category).then(currentCategory => {
          Category.findById(editedProduct.category).then(nextCategory => {
            let index = currentCategory.products.index(product._id)
            if (index >= 0) {
              currentCategory.products.splice(index, 1)
            }
            currentCategory.save()

            nextCategory.products.push(product._id)
            nextCategory.save()

            product.category = editedProduct.category

            product.save().then(() => {
              res.redirect(`/?success=${encodeURIComponent('Product was edited sucessfully')}`)
            })
          })
        })
      } else {
        product.save().then(() => {
          res.redirect(`/?success=${encodeURIComponent('Product was edited sucessfully')}`)
        })
      }
    } else {
      res.render('/', { error: 'You do not have the permissions!' })
    }
  })
}

module.exports.deleteGet = (req, res) => {
  let productId = req.params.id
  Product.findById(productId).then(product => {
    if (!product) {
      res.sendStatus(404)
      return
    }
    if (product.creator.equals(req.user._id) ||
      req.user.roles.indexOf('Admin') >= 0) {
      res.render('products/delete.pug', { product: product })
    } else {
      res.render('/', { error: 'You do not have the permissions!' })
    }
  })
}

module.exports.deletePost = (req, res) => {
  let id = req.params.id
  Product.findByIdAndRemove(id).then(product => {
    if (!product) {
      res.redirect(`/?error=${encodeURIComponent('Product was not found')}`)
    }
    if (product.creator.equals(req.user._id) ||
      req.user.roles.indexOf('Admin') >= 0) {
      Category.findById(product.category).then(categoryFound => {
        let index = categoryFound.products.indexOf(product._id)
        if (index >= 0) {
          categoryFound.products.splice(index, 1)
        }
        categoryFound.save()
        Category.findOne({ image: product.image }).then(isFound => {
          if (!isFound) {
            fs.unlink(product.image, () => {
              res.redirect(`/?success=${encodeURIComponent('Product was edited sucessfully')}`)
            })
          } else {
            res.redirect(`/?success=${encodeURIComponent('Product was edited sucessfully')}`)
          }
        }).catch(err => console.log(err))
      }).catch(err => console.log(err))
    } else {
      res.render('/', { error: 'You do not have the permissions!' })
    }
  }).catch(err => console.log(err))
}

module.exports.buyProductGet = (req, res) => {
  let productId = req.params.id
  Product.findById(productId).then(product => {
    if (!product) {
      res.sendStatus(404)
      return
    }

    res.render('products/buy.pug', { product: product })
  })
}

module.exports.buyPost = (req, res) => {
  let productId = req.params.id

  Product.findById(productId).then(product => {
    if (product.buyer) {
      res.redirect(`/?error=${encodeURIComponent('Product was already bought')}`)
      return
    }

    product.buyer = req.user._id
    product.save().then(() => {
      req.user.boughtProducts.push(productId)
      req.user.save().then(() => {
        res.redirect('/')
      }).catch(err => console.error(err))
    }).catch(err => console.error(err))
  })
}
