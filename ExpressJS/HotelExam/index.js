const port = 1131
const config = require('./config/config')
const database = require('./config/database.config.js')
const express = require('express')
let app = express()
let environment = process.env.NODE_environment || 'development'
require('./config/express')(app, config[environment])
require('./config/routes')(app)
require('./config/passport')()

database(config[environment])
app.listen(port, () => console.log(`App listening on ${port}`))
