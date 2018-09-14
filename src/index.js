const validate = require('./validate')
const getters = require('./getters')
const format = require('./format')

function analyticsEvent(input = {}, options = {}) {
  // TODO: handle DX around input
  //  - provide option to validate final event payload
  //  - temporarily store input to save for retries
  //  - provide handler to trigger alert on invalid event
  const eventName = getters.name(input, options)
  const eventProps = getters.properties(input, options)

  const newEvent = {}

  if (eventName) {
    newEvent.name = eventName
  }

  if (eventProps) {
    newEvent.properties = eventProps
  }

  return newEvent
}

function withOptions(overrides = {}) {
  return function(input, options) {
    return analyticsEvent(input, Object.assign({}, options, overrides))
  }
}

analyticsEvent.format = format
analyticsEvent.validate = validate
analyticsEvent.loadFormat = format.load.bind(format)
analyticsEvent.withOptions = withOptions

module.exports = analyticsEvent
