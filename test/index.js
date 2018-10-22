const test = require('ava')
const Event = require('../lib')

test(t => {
  t.truthy(Event())
})

test(t => {
  t.is(Event({ name: 'test' }).name, 'test')
})

test(t => {
  t.is(Event({ event: 'test' }).name, 'test')
})

test(t => {
  const Event2 = Event.withOptions({
    'getters.name': () => 'test2'
  })

  t.is(
    Event2({
      event: 'test'
    }).name,
    'test2'
  )
})

test(t => {
  t.not(Event().messageId, 'null')
})
