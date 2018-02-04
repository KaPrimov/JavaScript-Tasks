const mongoose = require('mongoose')

let genreSchema = mongoose.Schema({
  genreName: {type: mongoose.Schema.Types.String, required: true, unique: true},
  creationDate: {type: mongoose.Schema.Types.Date, default: Date.now()},
  memes: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Meme' } ]
})

genreSchema.methods.getLowerCasedName = function () {
  return this.name.toLowerCase()
}

let Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre
