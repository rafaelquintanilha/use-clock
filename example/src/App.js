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
