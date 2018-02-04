const Genre = require('../models/Genre')

module.exports.addGet = (req, res) => {
  Genre.find().then((genres) => {
    res.render('../views/genre/add.pug')
  }).catch(err => console.log(err))
}

module.exports.addPost = (req, res) => {
  let genreObj = req.body
  Genre.create(genreObj).then((genre) => {
    res.redirect('/')
  }).catch(err => console.log(err))
}
