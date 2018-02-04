const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)

  app.get('/user/register', controllers.user.registerGet)
  app.post('/user/register', controllers.user.registerPost)
  app.get('/user/login', controllers.user.loginGet)
  app.post('/user/login', controllers.user.loginPost)
  app.post('/user/logout', controllers.user.logoutPost)

  app.get('/product/create', auth.hasRole('Admin'), controllers.product.create.get)
  app.post('/product/create', auth.hasRole('Admin'), controllers.product.create.post)

  app.get('/order/customize/:id', auth.isAuthenticated, controllers.order.customize.get)
  app.post('/order/customize/:id', auth.isAuthenticated, controllers.order.customize.post)

  app.get('/order/details/:id', auth.isAuthenticated, controllers.order.details.get)
  app.get('/orders/status', auth.isAuthenticated, controllers.order.status.get)
  app.post('/orders/status', auth.hasRole('Admin'), controllers.order.all.post)

  app.post('/orders/all', auth.hasRole('Admin'), controllers.order.all.post)
  app.get('/orders/all', auth.hasRole('Admin'), controllers.order.all.get)
}
