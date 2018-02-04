const Category = require('../models/Category')
const Hotel = require('../models/Hotel')
var mongoose = require('mongoose')

module.exports = {
  add: {
    get: (req, res) => {
      res.render('category/add')
    },
    post: (req, res) => {
      let category = req.body
      Category.create(category).then((hotel) => {
        res.redirect('/categories')
      }).catch(err => console.error(err))
    }
  },
  all: (req, res) => {
    Category.find({}).then(categories => {
      res.render('category/all', {categories: categories})
    }).catch(err => console.error(err))
  },
  list: (req, res) => {
    const categoryName = req.params.name
    Category.findOne({name: categoryName}).then(category => {
      Hotel.find({category: category._id}).then(hotels => {
        res.render('category/list', { hotels: hotels, cateogry: categoryName })
      }).catch(err => console.error(err))
    })
  },
  delete: (req, res) => {
    const id = req.params.id
    Hotel.find({category: id}).then(hotels => {
      for (let hotel of hotels) {
        hotel.category = null
        hotel.save()
      }
      Category.findByIdAndRemove(id).then(() => {
        res.redirect('/categories')
      })
    })
  }
}
