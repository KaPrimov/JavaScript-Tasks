const handlers = require('../handlers')
const multer = require('multer')
let upload = multer({ dest: './public/imageData' })

module.exports = (app) => {
  app.get('/', handlers.home.index)

  app.get('/addMeme', handlers.meme.addGet)
  app.post('/addMeme', upload.single('image'), handlers.meme.addPost)

  app.get('/addGenre', handlers.genre.addGet)
  app.post('/addGenre', handlers.genre.addPost)

  app.get('/viewAllMemes', handlers.meme.viewAllGet)

  app.get('/searchMeme', handlers.meme.searchGet)
  app.post('/searchMeme', handlers.meme.searchPost)

  app.get('/meme/details/:id', handlers.meme.detailsGet)
  app.get('/upvote/:id', handlers.meme.upvoteGet)
}
