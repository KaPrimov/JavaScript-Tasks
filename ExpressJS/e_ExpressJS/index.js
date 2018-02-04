const port = 1235
const config = require('./config/config')
const database = require('./config/database.config.js')
const express = require('express')
let app = express()
let environment = process.env.NODE_environment || 'development'
require('./config/express')(app, config[environment])
require('./config/routes')(app)

database(config[environment])
app.listen(port, () => console.log(`App listening on ${port}`))
