const mongoose = require('mongoose')
const oneDay = 24 * 60 * 60 * 1000
let carSchema = mongoose.Schema({
  model: {type: mongoose.Schema.Types.String, required: true},
  price: {
    type: mongoose.Schema.Types.Number,
    min: 0,
    max: Number.MAX_VALUE,
    default: 0,
    required: true
  },
  image: {type: mongoose.Schema.Types.String, required: true},
  rentedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  rentDuration: {type: mongoose.Schema.Types.Number, default: 0},
  rentedOn: {type: mongoose.Schema.Types.Date}
})

carSchema.method({
  isRentable: function () {
    if (!this.rentDuration) {
      return true
    }
    let date = new Date(this.rentedOn)
    return date.getTime() + (oneDay * this.rentDuration) < Date.now()
  }
})

let Car = mongoose.model('Car', carSchema)

module.exports = Car
