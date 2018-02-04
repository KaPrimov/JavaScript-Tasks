const Hotel = require('../models/Hotel')
const Comment = require('../models/Comment')
const Category = require('../models/Category')

module.exports = {
  add: {
    get: (req, res) => {
      Category.find({}).then(categories => {
        res.render('hotel/add', { categories: categories })
      })
    },
    post: (req, res) => {
      let hotel = req.body
      hotel.date = Date.now()
      hotel.creator = req.user._id
      Hotel.create(hotel).then((hotel) => {
        req.user.createdHotels.push(hotel._id)
        req.user.save().then(() => {
          res.redirect(`/`)
        }).catch(err => console.error(err))
      }).catch(err => console.error(err))
    }
  },
  all: (req, res) => {
    let page = Number(req.query.page)
    Hotel.find({}).sort({ _id: -1, date: -1 }).skip((page - 1) * 20).limit(20).then(hotels => {
      Hotel.count({}).then(count => {
        let nextPage = page + 1
        let maxCount = Math.trunc(count / 20)
        if (count % 20 !== 0) {
          maxCount += 1
        }
        if (maxCount < nextPage) {
          nextPage = maxCount
        }
        let prevPage = page - 1 < 1 ? 1 : page - 1
        let pageData = {
          prev: prevPage,
          next: nextPage
        }
        res.render('hotel/all', {hotels: hotels, pageData: pageData})
      })
    }).catch(err => console.error(err))
  },
  details: {
    get: (req, res) => {
      const id = req.params.id
      Hotel.findById(id).populate('comments').then(hotel => {
        hotel.views = hotel.views + 1
        hotel.save().then(() => {
          let comments = hotel.comments.sort(function (a, b) {
            return a._id - b._id
          })
          let isLiked = false
          if (req.user) {
            const userId = req.user._id
            isLiked = hotel.likedBy.indexOf(userId) === -1
          }
          res.render('hotel/details', {hotel: hotel, comments: comments, isLiked: isLiked})
        })
      }).catch(err => console.error(err))
    },
    post: (req, res) => {
      const id = req.params.id
      let comment = req.body
      comment.hotel = id
      comment.creator = req.user._id
      Comment.create(comment).then(c => {
        Hotel.findById(id).then(hotel => {
          hotel.comments.push(c._id)
          hotel.save().then(() => {
            req.user.comments.push(c._id)
            req.user.save().then(() => {
              res.redirect(`/hotel/${id}/${hotel.title}`)
            }).catch(err => console.error(err))
          }).catch(err => console.error(err))
        }).catch(err => console.error(err))
      }).catch(err => console.error(err))
    }
  },
  delete: (req, res) => {
    let id = req.params.id
    Hotel.findById(id).then(hotelToRemove => {
      hotelToRemove.remove()
      res.redirect('/list')
    })
  },
  like: (req, res) => {
    const id = req.params.id
    Hotel.findById(id).then(hotel => {
      hotel.likes += 1
      hotel.views -= 1
      hotel.likedBy.push(req.user.id)
      hotel.save()
      res.redirect('/hotel/' + id + '/' + hotel.title)
    })
  },
  dislike: (req, res) => {
    const id = req.params.id
    Hotel.findById(id).then(hotel => {
      hotel.likes -= 1
      hotel.views -= 1
      const index = hotel.likedBy.indexOf(req.user._id)
      hotel.likedBy.splice(index, 1)
      hotel.save()
      res.redirect('/hotel/' + id + '/' + hotel.title)
    })
  }
}
