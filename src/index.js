import { useState } from 'react';
import moment from 'moment-timezone';
import useInterval from 'use-interval'

const useClock = (format = "DD/MM/YYYY HH:mm:ss", period = 1000) => {
  const [time, setTime] = useState(moment());

  useInterval(() => {
    setTime(moment());
  }, period);

  return {
    time: time.format(format),
    onTimezone: (timezone = moment.tz.guess()) => time.clone().tz(timezone).format(format),
    raw: time
  }
};

export default useClock;
