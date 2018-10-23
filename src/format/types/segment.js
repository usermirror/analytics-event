module.exports = function formatSegment(event) {
  const newEvent = {}

  if (event.name) {
    newEvent.event = event.name
  }

  if (event.timestamp) {
    newEvent.timestamp = event.timestamp
  }

  if (event.messageId) {
    newEvent.messageId = event.messageId
  }

  if (event.properties) {
    newEvent.properties = event.properties
  }

  if (event.context) {
    newEvent.context = event.context
  }

  if (event.userId) {
    newEvent.userId = event.userId
  }

  if (event.anonymousId) {
    newEvent.anonymousId = event.anonymousId
  }

  return newEvent
}
