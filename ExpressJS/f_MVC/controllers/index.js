const homeController = require('./home.js')
const carController = require('./car')
const userController = require('./user')

module.exports = {
  home: homeController,
  car: carController,
  user: userController
}
