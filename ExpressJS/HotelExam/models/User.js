const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')
const propertyIsRequired = '{0} is required.'

let userSchema = mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    required: propertyIsRequired.replace('{0}', 'Username'),
    unique: true
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: propertyIsRequired.replace('{0}', 'Password')
  },
  salt: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  firstName: {
    type: mongoose.Schema.Types.String,
    required: propertyIsRequired.replace('{0}', 'First name')
  },
  lastName: {
    type: mongoose.Schema.Types.String,
    required: propertyIsRequired.replace('{0}', 'Last name')
  },
  createdHotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', default: [] }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: [] }],
  roles: [{ type: mongoose.Schema.Types.String, default: [] }],
  isBlocked: {type: mongoose.Schema.Types.Boolean, default: false}
})
userSchema.method({
  authenticate: function (password) {
    let hashedPassword = encryption.generateHashedPassword(this.salt, password)

    if (hashedPassword === this.password) {
      return true
    }

    return false
  }
})
const User = mongoose.model('User', userSchema)

module.exports = User

module.exports.seedAdminUser = () => {
  User.find({username: 'admin'}).then(users => {
    if (users.length === 0) {
      let salt = encryption.generateSalt()
      let hashedPass = encryption.generateHashedPassword(salt, '1234')

      User.create({
        username: 'admin',
        firstName: 'Chuck',
        lastName: 'Norris',
        salt: salt,
        password: hashedPass,
        roles: ['Admin']
      })
    }
  })
}
