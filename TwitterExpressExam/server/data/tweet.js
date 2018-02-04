const mongoose = require('mongoose')
const validate = require('mongoose-validator')
const User = require('./User')

let textValidate = validate({
  validator: 'isLength',
  arguments: [3, 140],
  message: 'Text should be between {ARGS[0]} and {ARGS[1]} characters'
})

let tweetSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
    validate: textValidate
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  tags: [String],
  handlesUsers: [String]
})

let Tweet = module.exports = mongoose.model('Tweet', tweetSchema)
