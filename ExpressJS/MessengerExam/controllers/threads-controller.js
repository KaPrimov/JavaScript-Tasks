const Thread = require('../models/Thread')
const Message = require('../models/Message')
const User = require('../models/User')
const matcher = require('../util/matcher')

module.exports = {
  chatRoom: {
    get: (req, res) => {
      let currentUser = req.user.username
      let otherUser = req.params.username

      Thread.findOne({
        users: { $all: [currentUser, otherUser] }
      }).then(currentThread => {
        if (!currentThread) {
          return res.redirect('/?error=Thread no longer exists')
        }
        let data = { currentThread } // context to send to pug view
        User.findOne({ username: otherUser }).then(user => {
          if (!user) {
            return res.redirect('/?error=User no longer exists')
          }

          if (user.blockedUsers.indexOf(req.user._id) !== -1) {
            data.blocked = true
          }
        }).then(() => {
          Message.find({ thread: currentThread._id })
          .sort({ dateCreated: 1 })
          .populate('user')
          .then(messages => {
            for (let msg of messages) {
              if (matcher.isMessageLink(msg.content)) {
                msg.isLink = true
              }
              if (matcher.isLinkAnImage(msg.content)) {
                msg.isImage = true
              }
              if (msg.isLiked === undefined) {
                msg.isLiked = false
                msg.likedUser = null
              }
            }

            data.messages = messages
            res.render('thread/chat-room', data)
          })
        })
      })
    },
    post: (req, res) => {
      let content = req.body.content

      let activeUser = req.user.username
      let otherUser = req.params.username

      Thread.findOne({ users: { $all: [activeUser, otherUser] } }).then(thread => {
        if (!thread) {
          return res.redirect('/?error=Thread no longer exists')
        }

        let messageData = {
          thread: thread._id,
          user: req.user._id,
          content: content
        }
        if (matcher.isMessageLink(content)) {
          messageData.isLink = true
          if (matcher.isLinkAnImage(content)) {
            messageData.hasImage = true
          }
        }
        Message.create(messageData)
          .then(message => {
            if (!message) {
              return res.redirect(`/thread/${otherUser}?error=Internal server error. Cannot write to database.`)
            }

            res.redirect(`/thread/${otherUser}`)
          })
          .catch(err => {
            res.redirect(`/thread/${otherUser}?error=${err.errors.content.message}`)
          })
      })
    }
  }
}
