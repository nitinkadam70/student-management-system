import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useClock = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    let id = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return {
    hours: clock.getHours(),
    minutes: clock.getMinutes(),
  };
};

export default useClock;
