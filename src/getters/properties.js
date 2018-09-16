module.exports = function getProperties(event) {
  // TODO: handle combining properties and traits
  return event.properties || event.props || event.traits
}
