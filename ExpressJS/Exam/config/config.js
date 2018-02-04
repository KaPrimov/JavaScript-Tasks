const path = require('path')

module.exports = {
  development: {
    connectionString: 'mongodb://localhost:27017/donerDB',
    rootPath: path.normalize(path.join(__dirname, '../')),
    CATEGORIES: ['chicken', 'lamb', 'beef'],
    STATUSES: ['Pending', 'In Progress', 'In Transit', 'Delivered']
  },
  production: {

  }
}
