const User = require('../data/User')
const Tweet = require('../data/tweet')

module.exports = {
  add: (req, res) => {
    res.render('tweet/add')
  },
  create: (req, res) => {
    let text = req.body.text
    let tagRegex = /(#\w+)/g
    let handleRegex = /(@\w+)/g
    let tags = text.match(tagRegex)
    let mentionedUsers = text.match(handleRegex)
    let userId = req.user._doc._id
    req.checkBody('text', 'Tweet must have text').notEmpty()
    let errors = false
    if (errors) {
      res.render('tweet/add', {
        errors: errors
      })
    } else {
      let newTweet = new Tweet({
        text: text,
        author: userId
      })
      for (let index in tags) {
        let newTag = tags[index].replace('#', '').toLowerCase()
        if (newTweet.tags.indexOf(newTag) === -1) {
          newTweet.tags.push(newTag)
        }
      }
      for (let index in mentionedUsers) {
        let newHandleUser = mentionedUsers[index].replace('@', '')
        if (newTweet.handlesUsers.indexOf(newHandleUser) === -1) {
          newTweet.handlesUsers.push(newHandleUser)
        }
      }
      Tweet.create(newTweet).then(tweet => {
        let tweetId = tweet._id
        User.findByIdAndUpdate(
          userId,
          { $push: { 'tweets': tweetId } },
          { safe: true, upsert: true, new: true },
          function (err, model) {
            if (err) throw err
          })
      })
      req.flash('success_msg', 'You added new tweet')
      res.redirect('/')
    }
  },
  listByTag: (req, res) => {
    let tag = req.params.tagName
    Tweet.find({tags: tag})
      .populate({path: 'author'})
      .sort({createdDate: 'desc'})
      .limit(100)
      .exec()
      .then(tweets => {
        res.render('tweet/listByTag', {tweets: tweets, tag: tag})
      })
  },
  deleteById: (req, res) => {
    let id = req.params.id
    Tweet.findByIdAndRemove(id).then(() => {
      req.flash('succes_msg', 'You deleteted tweet with id: ' + id)
      res.redirect('/')
    })
  },
  detailsForUpdate: (req, res) => {
    let id = req.params.id
    Tweet.findById(id).then((tweet) => {
      res.render('tweet/update', { tweet })
    })
  },
  update: (req, res) => {
    let id = req.params.id
    let tagPattern = /(#\w+)/g
    let handlePattern = /(@\w+)/g
    let tagArray = []
    let handlesUsersArray = []
    let text = req.body.text
    let tags = text.match(tagPattern)
    let handleUsers = text.match(handlePattern)
    for (let i in tags) {
      let newTag = tags[i].replace('#', '').toLowerCase()
      if (tagArray.indexOf(newTag) === -1) {
        tagArray.push(newTag)
      }
    }
    for (let v in handleUsers) {
      let newHandleUser = handleUsers[v].replace('@', '')
      if (handlesUsersArray.indexOf(newHandleUser) === -1) {
        handlesUsersArray.push(newHandleUser)
      }
    }
    req.checkBody('text', 'Tweet must have text').notEmpty()
    let errors = req.validationErrors()
    if (errors) {
      res.render('tweet/update', {
        errors: errors
      })
    } else {
      Tweet.findByIdAndUpdate(id,
        { $set: { text: text, tags: tagArray, handlesUsers: handlesUsersArray } },
        { safe: true, upsert: true, new: true },
        function (err, model) {
          if (err) throw err
          console.log(model)
        }
      )
      req.flash('success_msg', 'Successfuly update tweet')
      res.redirect('/')
    }
  }
}

