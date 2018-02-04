const mongoose = require('mongoose')
const STATUSES = require('../config/config').development.STATUSES

let orderSchema = mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  date: {type: mongoose.Schema.Types.Date, default: Date.now()},
  status: {
    type: mongoose.Schema.Types.String,
    required: true,
    enum: STATUSES,
    default: 'Pending'
  },
  toppings: [{ type: mongoose.Schema.Types.String }]
})

// orderSchema.pre('save', function (next) {
//   if (!this.isModified()) {
//     next()
//   }
// })

const Order = mongoose.model('Order', orderSchema)
module.exports = Order
