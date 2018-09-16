module.exports = function formatShort(event) {
  const newEvent = {}

  if (event.name) {
    newEvent.name = event.name
  }

  if (event.timestamp) {
    newEvent.ts = event.timestamp
  }

  if (event.messageId) {
    newEvent.msg_id = event.messageId
  }

  if (event.namespaceId) {
    newEvent.nsc_id = event.namespaceId
  }

  if (event.properties) {
    newEvent.props = event.properties
  }

  return newEvent
}
