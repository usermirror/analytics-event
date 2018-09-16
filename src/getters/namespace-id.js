module.exports = function namespaceId(event, options) {
  if (typeof options['getters.namespaceId'] === 'function') {
    return options['getters.namespaceId'](event, options)
  }

  return event.namespaceId || event.nsc_id || event.namespace
}
