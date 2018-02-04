const User = require('../data/User')
const Tweet = require('../data/tweet')

module.exports = {
  register: (req, res) => {
    res.render('users/register')
  },
  create: (req, res) => {
    let name = req.body.name
    let username = req.body.username
    let password = req.body.password
    // Validation
    req.checkBody('name', 'Name is required').notEmpty()
    req.checkBody('username', 'Username is required').notEmpty()
    req.checkBody('password', 'Password is required').notEmpty()
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password)
    let errors = req.validationErrors()

    if (errors) {
      res.render('users/register', {
        errors: errors
      })
    } else {
      let newUser = new User({
        name: name,
        username: username,
        password: password
      })
      User.createUser(newUser, function (err, user) {
        if (err) throw err
      })
      req.flash('success_msg', 'You are registered and can now login')

      res.redirect('/')
    }
  },

  login: (req, res) => {
    res.render('users/login')
  },
  authenticate: (req, res) => {
    res.redirect('/')
  },
  logout: (req, res) => {
    req.logout()
    req.flash('success_msg', 'You are logged out')
    res.redirect('/')
  },
  profile: (req, res) => {
    let username = req.params.username
    User.findOne({username: username})
      .then(user => {
        if (user) {
          Tweet.find({})
            .or([{ author: user._id }, { handlesUsers: username }])
            .populate('author')
            .sort({ date: 'desc' })
            .limit(100)
            .exec()
            .then(tweets => {
              res.render('users/profile', {tweets: tweets, username: username})
            })
        }
      })
  }
}
