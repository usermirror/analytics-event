module.exports = function getName(event) {
  return event.event || event.name || event.Event
}
