module.exports = function getName(event, options) {
  if (typeof options['getters.name'] === 'function') {
    return options['getters.name'](event, options)
  }

  return event.event || event.name || event.Event
}
