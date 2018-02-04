const controllers = require('../controllers')
const auth = require('../config/auth')
const passport = require('passport')

module.exports = (app) => {
  app.get('/', controllers.home.index)

  app.get('/users/register', controllers.users.register)
  app.post('/users/register', controllers.users.create)
  app.get('/users/login', controllers.users.login)
  app.post('/users/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/user/login', failureFlash: true }), controllers.users.authenticate)
  app.get('/profile/:username', auth.isAuthenticated, controllers.users.profile)

  app.post('/users/logout', controllers.users.logout)

  app.get('/tweet', auth.isAuthenticated, controllers.tweets.add)
  app.post('/tweet', auth.isAuthenticated, controllers.tweets.create)
  app.get('/tag/:tagName', controllers.tweets.listByTag)

  app.get('/tweet/delete/:id', auth.isInRole('Admin'), controllers.tweets.deleteById)
  app.get('/tweet/update/:id', auth.isInRole('Admin'), controllers.tweets.detailsForUpdate)
  app.post('/tweet/update/:id', auth.isInRole('Admin'), controllers.tweets.update)

  app.get('/admins/all', auth.isInRole('Admin'), controllers.admin.all)
  app.get('/admins/add/:id', auth.isInRole('Admin'), controllers.admin.addAdmin)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('Not Found')
    res.end()
  })
}
