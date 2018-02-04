const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = (config) => {
  mongoose.connect(config.connectionString, {useMongoClient: true})

  let database = mongoose.connection

  database.once('open', (err) => {
    if (err) {
      console.warn(err)
      return
    }
    console.log('Connected to MongoDB')
  })

  database.on('error', (err) => {
    console.log(err)
  })
  require('../models/Genre')
  require('../models/Meme')
}
