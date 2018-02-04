const User = require('../models/User')

module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect('/user/login')
    }
  },
  hasRole: role => (req, res, next) => {
    if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
      next()
    } else {
      res.redirect('/user/login')
    }
  },
  isNotBlocked: (req, res, next) => {
    let otherUser = req.user
    if (otherUser.isBlocked) {
      res.redirect(
        `/?error=${otherUser.username} has blocked you, and I restritect the post method :)`
      )
    } else {
      next()
    }
  }
}
