const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const User = require('../models/User')

module.exports = config => {
  mongoose.connect(config.connectionString, {
    useMongoClient: true
  })
  const db = mongoose.connection
  db.once('open', err => {
    if (err) throw err
    console.log('Connected to MongoDB')
  })
  db.on('error', reason => {
    console.log(reason)
  })

  require('../models/Product')
  require('../models/Order')
  require('../models/User').seedAdminUser()
}
