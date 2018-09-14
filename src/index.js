const validate = require('./validate')
const getters = require('./getters')
const format = require('./format')

function analyticsEvent(input = {}) {
  // TODO: handle DX around input
  //  - provide option to validate final event payload
  //  - temporarily store input to save for retries
  //  - provide handler to trigger alert on invalid event
  const eventName = getters.name(input)
  const eventProps = getters.properties(input)

  const newEvent = {}

  if (eventName) {
    newEvent.name = eventName
  }

  if (eventProps) {
    newEvent.properties = eventProps
  }

  return newEvent
}

analyticsEvent.format = format
analyticsEvent.loadFormat = format.load.bind(format)
analyticsEvent.validate = validate

module.exports = analyticsEvent
