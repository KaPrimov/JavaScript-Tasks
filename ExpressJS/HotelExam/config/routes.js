const controllers = require('../controllers')
const multer = require('multer')
let upload = multer({ dest: './public/imageData' })
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)

  app.get('/user/register', controllers.user.registerGet)
  app.post('/user/register', controllers.user.registerPost)
  app.get('/user/login', controllers.user.loginGet)
  app.post('/user/login', controllers.user.loginPost)
  app.post('/user/logout', controllers.user.logoutPost)
  app.get('/user/:username', auth.isAuthenticated, controllers.user.profileGet)

  app.get('/add', auth.isAuthenticated, auth.isNotBlocked, controllers.hotel.add.get)
  app.post('/add', auth.isAuthenticated, auth.isNotBlocked, controllers.hotel.add.post)
  app.get('/list', controllers.hotel.all)
  app.post('/hotel/delete/:id', auth.hasRole('Admin'), controllers.hotel.delete)
  app.get('/hotel/:id/:title', controllers.hotel.details.get)
  app.post('/hotel/:id/:title', auth.isAuthenticated, auth.isNotBlocked, controllers.hotel.details.post)

  app.get('/comment/delete/:id', auth.hasRole('Admin'), controllers.comment.delete)

  app.get('/admins/all', auth.hasRole('Admin'), controllers.admin.all)
  app.post('/admins/add/:id', auth.hasRole('Admin'), controllers.admin.add)

  app.post('/like/:id', auth.isAuthenticated, controllers.hotel.like)
  app.post('/dislike/:id', auth.isAuthenticated, controllers.hotel.dislike)

  app.get('/categories', controllers.category.all)
  app.get('/category/add', auth.hasRole('Admin'), controllers.category.add.get)
  app.post('/category/add', auth.hasRole('Admin'), controllers.category.add.post)
  app.get('/list/:name', controllers.category.list)
  app.post('/category/delete/:id', auth.hasRole('Admin'), controllers.category.delete)

  app.post('/block/:id', auth.hasRole('Admin'), controllers.admin.block)
  app.post('/unblock/:id', auth.hasRole('Admin'), controllers.admin.unblock)
}
