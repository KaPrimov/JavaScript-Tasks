const Order = require('../models/Order')
const Product = require('../models/Product')
const dateFormatter = require('../utilities/date-formatter')

module.exports = {
  customize: {
    get: (req, res) => {
      const productId = req.params.id
      Product.findById(productId).then(product => {
        res.render('order/customize', { product: product })
      }).catch(err => console.error(err))
    },
    post: (req, res) => {
      let orderToCreate = {}
      orderToCreate.creator = req.user._id
      orderToCreate.product = req.body.product_id
      orderToCreate.status = 'Pending'
      orderToCreate.toppings = req.body.toppings
      orderToCreate.date = Date.now()
      Order.create(orderToCreate).then(order => {
        req.user.orders.push(order._id)
        req.user.save().then(() => {
          res.redirect('/order/details/' + order._id)
        }).catch(err => console.error(err))
      }).catch(err => console.error(err))
    }
  },
  details: {
    get: (req, res) => {
      let id = req.params.id
      Order.findById(id).populate('product').then(order => {
        const date = dateFormatter(order.date)
        res.render('order/details', {order: order, product: order.product, date: date})
      })
    }
  },
  status: {
    get: (req, res) => {
      let user = req.user
      Order.find({creator: user._id}).populate('product').then(orders => {
        res.render('order/myOrder', {orders: orders})
      })
    }
  },
  all: {
    get: (req, res) => {
      Order.find({}).populate('product').then(orders => {
        res.render('order/myOrder', {orders: orders})
      })
    },
    post: (req, res) => {
      let orderStatuses = req.body
      let data = []
      for (let key in orderStatuses) {
        let obj = {}
        obj['_id'] = key
        obj['status'] = orderStatuses[key]
        data.push(obj)
      }
      data.forEach(function (order) {
        Order.findById(order._id).then(orderToChange => {
          if (orderToChange.status !== order.status) {
            orderToChange.status = order.status
            orderToChange.save()
          }
        })
      })
      res.redirect('/orders/all')
    }
  }
}
