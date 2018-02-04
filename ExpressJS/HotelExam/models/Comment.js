const mongoose = require('mongoose')
const User = require('./User')

let commentSchema = mongoose.Schema({
  text: { type: mongoose.Schema.Types.String, required: true },
  hotel: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Hotel'},
  creator: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
})

commentSchema.pre('remove', function (next) {
  User.findById(this.creator).then(user => {
    const index = user.comments.indexOf(this._id)
    user.comments.splice(index, 1)
    user.save()
  })
  next()
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
