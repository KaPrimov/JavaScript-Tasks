const mongoose = require('mongoose')

let tagSchema = mongoose.Schema({
  tagName: {type: mongoose.Schema.Types.String, required: true, unique: true},
  creationDate: {type: mongoose.Schema.Types.Date, default: Date.now()},
  images: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Image' } ]
})

tagSchema.methods.getLowerCasedName = function () {
  return this.name.toLowerCase()
}

let Tag = mongoose.model('Tag', tagSchema)

module.exports = Tag
