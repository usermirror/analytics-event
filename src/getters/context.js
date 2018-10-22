module.exports = function getContext(event) {
  return event.context || event.ctx
}
