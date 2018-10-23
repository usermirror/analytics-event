const segment = require('./types/segment')
const short = require('./types/short')
const log = require('../utils/log')

const formatByType = {
  short,
  segment
}

function format(event, options) {
  const formatter = formatByType[options.format]

  return formatter(event, options)
}

format.load = (formatType, formatter) => {
  if (!formatter) {
    return log.error('format.load', 'missing formatter function')
  }

  if (formatByType[formatType]) {
    return log.error('format.load', 'format type already exists')
  }

  formatByType[formatType] = formatter
}

module.exports = format
