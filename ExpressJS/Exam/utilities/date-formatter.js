const dateformat = require('dateformat')

module.exports = (date) => {
  return dateformat(date, 'dd.mmm yyyy hh:MM')
}
