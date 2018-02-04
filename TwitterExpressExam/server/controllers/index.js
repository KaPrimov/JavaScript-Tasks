let homeController = require('./home-controller')
let usersController = require('./users-controller')
let tweetsController = require('./tweets-controller')
let adminssController = require('./admin-controller')

module.exports = {
  home: homeController,
  users: usersController,
  tweets: tweetsController,
  admin: adminssController
}
