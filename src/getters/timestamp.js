module.exports = function timestamp(event, options) {
  if (typeof options['getters.timestamp'] === 'function') {
    return options['getters.timestamp'](event, options)
  }

  const inputTimestamp = event.timestamp || event.ts

  try {
    const d = new Date(inputTimestamp)

    return d.toISOString()
  } catch (err) {
    if (inputTimestamp) {
      return inputTimestamp
    }
  }

  return new Date().toISOString()
}
