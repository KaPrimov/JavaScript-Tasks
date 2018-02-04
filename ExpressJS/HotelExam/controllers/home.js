const Hotel = require('../models/Hotel')

module.exports.index = (req, res) => {
  Hotel.find({}).sort({ _id: -1, date: -1 }).limit(20).then(hotels => {
    res.render('home/index', {hotels: hotels})
  })
}
