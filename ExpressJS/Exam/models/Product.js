const mongoose = require('mongoose')
const CATEGORIES = require('../config/config').development.CATEGORIES

let productSchema = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.String,
    required: true,
    enum: CATEGORIES
  },
  size: { type: mongoose.Schema.Types.Number, min: 17, max: 24 },
  image: { type: mongoose.Schema.Types.String },
  toppings: [{ type: mongoose.Schema.Types.String }]
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
