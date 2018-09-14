const log = require('../utils/log')
const loadFormat = require('./load')

function format(event, options) {
  log('format', 'not implemented')
}

format.load = loadFormat

module.exports = format
