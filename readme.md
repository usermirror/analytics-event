<p align="center">
  <a href="https://www.npmjs.com/package/analytics-event"><img src="./docs/images/banner.png?cache=2" alt="analyticsEvent" /></a>
</p>

<p align="center">
  A tiny utility for working with analytics events<br/>
  on the server and in the browser.
</p>
<br/>

<p align="center">
  <a href="https://unpkg.com/analytics-event/dist/analytics-event.min.js">
    <img src="https://img.badgesize.io/https://unpkg.com/analytics-event/dist/analytics-event.min.js?compression=gzip&amp;label=analytics--id&cache=3">
  </a>
  <a href="https://www.npmjs.com/package/analytics-event">
    <img src="https://img.shields.io/npm/v/analytics-event.svg?maxAge=3600&label=analytics-event&colorB=007ec6&cache=3">
  </a>
</p>
<br/>


### Getting Started

#### Installation

Install with npm:

```shell
npm install --save analytics-event
```

Or with yarn:

```shell
yarn add analytics-event
```

#### Examples

```javascript
import AEvent from 'analytics-event'

// Generate event from options 
AEvent({
  name: 'User Signed Up',
  properties: {
    referral_type: 'friend'
  }
})

// Use your favorite analytics library to send events
analytics.track(AEvent({
  name: 'User Signed Up',
  properties: {
    referral_type: 'friend'
  }
}))
```

### Usage

#### Generating an event

```javascript
import AEvent from 'analytics-event'

// Generate an event that follows https://schema.org/AnalyticsEvent
AEvent({
  name: 'User Signed Up',
  properties: {
    referral_type: 'friend'
  }
})
```

#### Formatting an event

```javascript
import AEvent from 'analytics-event'

// You can also just import the format function with:
// import { format, loadFormat } from 'analytics-event'
import internalDataFormat from './internal-data-format'

AEvent.loadFormat('internal-data', internalDataFormat)

function receiveIncomingEvents(batch) {
  return batch.map(msg => AEvent.format(msg, {
    preset: 'internal-data'
  }))
}
```

### Contributing

All contributions are super welcome! `analytics-event` is [MIT-licensed](./license).
