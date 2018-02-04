const mongoose = require('mongoose')

let categorySchema = mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, required: true, unique: true }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
