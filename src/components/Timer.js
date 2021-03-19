import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";

export default function Timer({ gameWord, time, updateScore, setGame }) {
  const [timePassed, setTimePassed] = useState();

  useEffect(() => {
    updateScore(timePassed === undefined ? 0 : timePassed);
    setTimePassed(0);

    return () => {
      setTimePassed(0);
    };
  }, [gameWord]);

  useEffect(() => {
    const tick = setInterval(() => {
      setTimePassed(timePassed + 1);
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, [timePassed]);

  if (time - timePassed === 0) {
    setGame(false);
  }
  return <Countdown count={time - timePassed} />;
}
