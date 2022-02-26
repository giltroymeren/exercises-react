import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { appendZeroToTime } from "../../utils";
import { selectDateStart, start, stop } from "../../redux/recorder";
import "./Recorder.css";
import { createUserEvent } from "../../redux/userEvents";

const getTime = (timerStarted: boolean, dateStart: string) => {
  let seconds = timerStarted
    ? Math.floor((Date.now() - new Date(dateStart).getTime()) / 1000)
    : 0;
  const hours = seconds ? Math.floor(seconds / 60 / 60) : 0;
  seconds -= hours * 60 * 60;
  const minutes = seconds ? Math.floor(seconds / 60) : 0;
  seconds -= minutes * 60;

  return `${appendZeroToTime(hours)}:${appendZeroToTime(
    minutes
  )}:${appendZeroToTime(seconds)}`;
};

const clearTimerInterval = (interval: React.MutableRefObject<number>) =>
  window.clearInterval(interval.current);

const Recorder = () => {
  const dispatch = useDispatch();
  const dateStart = useSelector(selectDateStart);
  const timerStarted = dateStart !== "";
  const [, setCount] = useState<number>(0);

  let interval = useRef<number>(0);
  const handleClick = () => {
    if (timerStarted) {
      clearTimerInterval(interval);
      dispatch(createUserEvent());
      dispatch(stop());
    } else {
      dispatch(start());
      interval.current = window.setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimerInterval(interval);
    };
  }, []);

  return (
    <div className={cx("recorder", { "recorder-started": timerStarted })}>
      <button className="recorder-record" onClick={handleClick}>
        <span></span>
      </button>
      <div className="recorder-counter">{getTime(timerStarted, dateStart)}</div>
    </div>
  );
};

export default Recorder;
