const Meme = require('../models/Meme')
const Genre = require('../models/Genre')
// Utils

module.exports.addGet = (req, res) => {
  Genre.find().then((genres) => {
    res.render('../views/meme/add.pug', { genres: genres })
  }).catch(err => console.log(err))
}

module.exports.addPost = (req, res) => {
  let memeObj = req.body
  memeObj.image = '\\' + req.file.path
  // console.log(memeObj)
  Meme.create(memeObj).then((meme) => {
    Genre.findById(meme.genre).then((genre) => {
      genre.memes.push(meme._id)
      genre.save()
      res.redirect('/')
    }).catch(err => console.log(err))
  }).catch(err => console.log(err))
}

module.exports.viewAllGet = (req, res) => {
  Meme.find({}).then((memes) => {
    res.render('../views/meme/viewAll.pug', { memes: memes, globalTitle: 'All Memes' })
  })
}

module.exports.searchGet = (req, res) => {
  Genre.find({}).then((genres) => {
    res.render('../views/meme/searchMeme.pug', { genres: genres })
  })
}

module.exports.searchPost = (req, res) => {
  let searchObj = req.body
  Meme.find({ $or: [ {title: searchObj.title}, {genre: searchObj.genre} ] }).then(memes => {
    res.render('../views/meme/viewAll.pug', { memes: memes, globalTitle: 'Found Memes' })
  })
}

module.exports.detailsGet = (req, res) => {
  let id = req.params.id
  Meme.findById(id).then(meme => {
    res.render('../views/meme/details.pug', { meme: meme })
  })
}

module.exports.upvoteGet = (req, res) => {
  let id = req.params.id
  Meme.findById(id)
    .exec()
    .then(meme => {
      meme.votes = meme.votes + 1
      meme.save()
      Meme.find({}).then(memes => {
        res.redirect('/')
      })
    }).catch(err => console.log(err))
}
