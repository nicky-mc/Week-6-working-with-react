import { useEffect, useState } from "react";
import DigitalClock from "./components/DigitalClock";
import GameStats from "./components/GameStats";
import GameControls from "./components/GameControls";
import Stopwatch from "./components/Stopwatch";
import "./App.css";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [clicksPerSecond, setClicksPerSecond] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [cookies, setCookies] = useState(0);
  const [timerMessage, setTimerMessage] = useState("");
  const [isCleanTimer, setIsCleanTimer] = useState(true);

  useEffect(() => {
    const cookieInterval = setInterval(() => {
      setCookies((prevCookies) => prevCookies + clicksPerSecond * multiplier);
    }, 1000);

    return () => clearInterval(cookieInterval);
  }, [clicksPerSecond, multiplier]);

  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
    setCookies((prevCookies) => prevCookies + 1);
  };

  const increaseClicksPerSecond = () => {
    setClicksPerSecond((prevCPS) => prevCPS + 1);
  };

  const resetAll = () => {
    setClicks(0);
    setClicksPerSecond(0);
    setMultiplier(1);
    setCookies(0);
    setTimerMessage("");
  };

  const buyMultiplier = (cost, factor) => {
    if (cookies >= cost) {
      setCookies((prevCookies) => prevCookies - cost);
      setMultiplier((prevMultiplier) => prevMultiplier * factor);
    } else {
      setTimerMessage("Not enough cookies!");
    }
  };

  return (
    <div className="game-container">
      <h1>Digital Stopwatch Clicker Game</h1>
      <DigitalClock />
      <GameStats
        clicks={clicks}
        clicksPerSecond={clicksPerSecond}
        multiplier={multiplier}
        cookies={cookies}
      />
      <GameControls
        handleClick={handleClick}
        increaseClicksPerSecond={increaseClicksPerSecond}
        resetAll={resetAll}
        buyMultiplier={buyMultiplier}
      />
      <Stopwatch
        isCleanTimer={isCleanTimer}
        setIsCleanTimer={setIsCleanTimer}
      />
      <p className="timer-message">{timerMessage}</p>
    </div>
  );
}
