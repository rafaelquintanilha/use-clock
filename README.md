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

## License

MIT © [rafaelquintanilha](https://github.com/rafaelquintanilha)
