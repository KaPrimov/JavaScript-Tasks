const path = require('path')
module.exports = {
  development: {
    port: process.env.PORT || 1425,
    dbPath: 'mongodb://localhost:27017/messenger-db',
    rootPath: path.normalize(
      path.join(__dirname, '../../'))
  },
  production: {}
}
