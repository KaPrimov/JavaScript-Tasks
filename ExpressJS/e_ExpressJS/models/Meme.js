const mongoose = require('mongoose')

let memeSchema = mongoose.Schema({
  title: {type: mongoose.Schema.Types.String, required: true},
  date: {type: mongoose.Schema.Types.Date, default: Date.now()},
  votes: {type: mongoose.Schema.Types.Number, default: 0},
  description: {type: mongoose.Schema.Types.String},
  image: {type: mongoose.Schema.Types.String},
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }
})

let Meme = mongoose.model('Meme', memeSchema)

module.exports = Meme
