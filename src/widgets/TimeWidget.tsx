import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';

/**
 * React hook to get current time
 */
const CurTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setDate(new Date());
    };

    const timer = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return date;
};

const TimeWidget: React.FC = () => {
  const time = CurTime();
  return <Typography variant="h6">{time.toLocaleTimeString()}</Typography>;
};

export default TimeWidget;
