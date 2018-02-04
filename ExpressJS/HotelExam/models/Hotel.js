const mongoose = require('mongoose')
const Comment = require('./Comment')
const User = require('./User')

let hotelSchema = mongoose.Schema({
  title: { type: mongoose.Schema.Types.String, required: true },
  description: { type: mongoose.Schema.Types.String },
  image: { type: mongoose.Schema.Types.String },
  location: { type: mongoose.Schema.Types.String },
  date: { type: mongoose.Schema.Types.Date, default: Date.now(), required: true },
  likes: { type: mongoose.Schema.Types.Number, default: 0 },
  views: { type: mongoose.Schema.Types.Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  comments: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: [] } ],
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likedBy: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] } ]
})

hotelSchema.pre('remove', function (next) {
  Comment.remove({hotel: this._id}).exec()
  User.findById(this.creator).then(user => {
    if (!user) console.error('No user found')

    let index = user.createdHotels.indexOf(this._id)
    user.createdHotels.splice(index, 1)
    user.save()
  })
  next()
})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel
