# use-clock

> React Hook for sharing clock logic with timezone capabilities

[![NPM](https://img.shields.io/npm/v/use-clock.svg)](https://www.npmjs.com/package/use-clock) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-clock
```

## Usage

```jsx
import React from 'react';
import useClock from 'use-clock';

function App() {
  const { time, onTimezone, raw } = useClock("HH:mm:ss");
  const londonTime = onTimezone("Europe/London");
  const brasiliaTime = onTimezone("America/Sao_Paulo");
  return (
    <div>
      <div><b>Computer time:</b> {time}</div>
      <div><b>London time:</b> {londonTime}</div>
      <div><b>Brasilia time:</b> {brasiliaTime}</div>
      <div><b>Raw time:</b> {raw.format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
    </div>
  );
}

export default App;
```

#### `useClock(<format: String>, <period: Number>)`
Param | Type | Default | Description
--- | --- | --- | ---
format | `String` | `"DD/MM/YYYY HH:mm:ss"` | Any string accepted by [`moment.format`](https://momentjs.com/docs/#/displaying/format/) function
period | `Number` | `1000` | Time, in miliseconds, that the clock is updated

#### `onTimezone(<timezone: String>)`
Param | Type | Default | Description
--- | --- | --- | ---
timezone | `String` | `"DD/MM/YYYY HH:mm:ss"` | [Any string accepted as a timezone](//en.wikipedia.org/wiki/List_of_tz_database_time_zones)

## License

MIT © [rafaelquintanilha](https://github.com/rafaelquintanilha)
