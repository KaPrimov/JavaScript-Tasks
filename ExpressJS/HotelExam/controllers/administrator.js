const User = require('../models/User')

module.exports = {
  all: (req, res) => {
    User.find().then(users => {
      res.render('admin/all', { users: users })
    })
  },
  add: (req, res) => {
    let id = req.params.id
    User.findById(id).then(user => {
      if (user.roles.indexOf('Admin') === -1) {
        user.roles.push('Admin')
      }
      user.save().then(() => {
        res.redirect('/')
      })
    })
  },
  block: (req, res) => {
    const id = req.params.id
    User.findById(id).then(user => {
      user.isBlocked = true
      user.save().then(() => {
        res.redirect('/admins/all')
      })
    })
  },
  unblock: (req, res) => {
    const id = req.params.id
    User.findById(id).then(user => {
      user.isBlocked = false
      user.save().then(() => {
        res.redirect('/admins/all')
      })
    })
  }
}
