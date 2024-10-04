import { useState, useEffect } from "react";

const Stopwatch = ({ isCleanTimer, setIsCleanTimer }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };
  const toggleTimer = () => setIsCleanTimer((prev) => !prev);

  return (
    <>
      <div className="stopwatch">{formatTime(elapsedTime)}</div>
      <div className="stopwatch-controls">
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={toggleTimer}>
          Switch to {isCleanTimer ? "Dirty" : "Clean"} Timer
        </button>
      </div>
      <p className="timer-info">
        Current Timer: {isCleanTimer ? "Clean" : "Dirty"}
      </p>
    </>
  );
};

export default Stopwatch;
