const analyticsId = require('analytics-id')

module.exports = function messageId(event, options) {
  if (typeof options['getters.messageId'] === 'function') {
    return options['getters.messageId'](event, options)
  }

  return event.messageId || event.originalMessageId || analyticsId()
}
