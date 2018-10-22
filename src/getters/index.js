const namespaceId = require('./namespace-id')
const messageId = require('./message-id')
const properties = require('./properties')
const timestamp = require('./timestamp')
const context = require('./context')
const name = require('./name')

const getters = {
  name,
  context,
  timestamp,
  messageId,
  namespaceId,
  properties
}

module.exports = getters
