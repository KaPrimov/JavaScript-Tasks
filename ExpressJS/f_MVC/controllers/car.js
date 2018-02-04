const Car = require('../models/Car')
const User = require('../models/User')
module.exports.addGet = (req, res) => {
  res.render('car/add')
}

module.exports.addPost = (req, res) => {
  let carObj = req.body
  carObj.image = '\\' + req.file.path

  Car.create(carObj).then((product) => {
    res.redirect(`/?success=${encodeURIComponent('Car was added sucessfully')}`)
  }).catch(err => console.log(err))
}

module.exports.allGet = (req, res) => {
  let page = Number(req.query.page)
  Car.find({}).skip((page - 1) * 10).limit(10).then(cars => {
    let queryData = req.query

    if (queryData.query) {
      cars = cars.filter(c => c.model.toLowerCase()
        .indexOf(queryData.query) !== -1).slice(0, 10)
    }
    Car.count({}).then(count => {
      let nextPage = page + 1
      let maxCount = Math.trunc(count / 10)
      if (count % 10 !== 0) {
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
      res.render('car/all', { cars: cars, pageData: pageData })
    })
  })
}

module.exports.rentGet = (req, res) => {
  const id = req.params.id
  Car.findById(id).then(car => {
    res.render('car/rent', { car: car })
  })
}

module.exports.rentPost = (req, res) => {
  const id = req.params.id
  let days = req.body.days
  Car.findById(id).then(car => {
    if (car.isRentable()) {
      car.rentedOn = Date.now()
      car.rentDuration = days
      car.save().then(() => {
        User.findById(res.locals.user).then(user => {
          let bookingData = {}
          bookingData.rentedOn = car.rentedOn
          bookingData.rentDuration = days
          bookingData.model = car.model
          user.rentedCars.push(bookingData)
          user.save().then(() => {
            res.redirect(`/?success=${encodeURIComponent('Car was rented sucessfully')}`)
          })
        })
      })
    } else {
      res.redirect(`/?error=${encodeURIComponent('Car is not available')}`)
    }
  })
}

module.exports.editGet = (req, res) => {
  const id = req.params.id

  Car.findById(id).then(car => {
    res.render('car/edit', { car: car })
  }).catch(err => console.error(err))
}

module.exports.editPost = (req, res) => {
  let id = req.params.id
  let editedCar = req.body

  Car.findById(id).then(car => {
    if (!car) {
      res.redirect(
        `/?error${encodeURIComponent('error=Product was not found!')}`
      )
      return
    }
    if (req.user.roles.indexOf('Admin') >= 0) {
      car.moder = editedCar.moder
      car.price = editedCar.price
      car.rentDuration = editedCar.rentDuration
    }

    if (req.file) {
      car.image = '\\' + req.file.path
    }

    car.save().then(() => {
      res.redirect('/car/all')
    }).catch(err => console.error(err))
  }).catch(err => console.error(err))
}
