const controllers = require('../controllers')
const multer = require('multer')
const auth = require('./auth')
let upload = multer({ dest: './content/imageData' })

module.exports = (app) => {
  app.get('/', controllers.home.index)

  app.get('/user/register', controllers.user.registerGet)
  app.post('/user/register', controllers.user.registerPost)

  app.get('/user/login', controllers.user.loginGet)
  app.post('/user/login', controllers.user.loginPost)

  app.post('/user/logout', controllers.user.logoutPost)

  app.get('/car/add', auth.isInRole('Admin'), controllers.car.addGet)
  app.post('/car/add', auth.isInRole('Admin'), upload.single('image'), controllers.car.addPost)

  app.get('/car/all', controllers.car.allGet)

  app.get('/car/rent/:id', auth.isAuthenticated, controllers.car.rentGet)
  app.post('/car/rent/:id', auth.isAuthenticated, controllers.car.rentPost)

  app.get('/user/:id', auth.isAuthenticated, controllers.user.detailsGet)

  app.get('/car/edit/:id', auth.isInRole('Admin'), controllers.car.editGet)
  app.post('/car/edit/:id', auth.isInRole('Admin'), upload.single('image'), controllers.car.editPost)
}
