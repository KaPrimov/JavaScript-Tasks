const mongoose = require('mongoose')

let messageSchema = mongoose.Schema({
  content: {
    type: mongoose.Schema.Types.String,
    required: 'Message must be between 1 and 1000 symbols',
    validate: {
      validator: (content) => {
        return !(content.length > 1000) && content.length > 0
      },
      message: ('Message must be between 1 and 1000 symbols')
    }
  },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  thread: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Thread' },
  dateCreated: { type: mongoose.Schema.Types.Date, default: Date.now() },
  isLiked: {type: mongoose.Schema.Types.Boolean, default: false},
  likedUser: { type: mongoose.Schema.Types.ObjectId, default: null }
})

let Message = mongoose.model('Message', messageSchema)

module.exports = Message
