const test = require('ava')
const AnalyticsEvent = require('../lib')

const ShortEvent = AnalyticsEvent.withOptions({
  format: 'short'
})

test(t => {
  t.is(ShortEvent({ namespace: 'test' }).nsc_id, 'test')
})

test(t => {
  t.falsy(ShortEvent().timestamp)
  t.truthy(ShortEvent().ts)
})

test(t => {
  t.truthy(ShortEvent({ timestamp: '2018-09-05 11:31:43 UTC' }).ts)
})
