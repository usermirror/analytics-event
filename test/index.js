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
