import { useEffect, useState } from "react";
import "./app.css";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [clicksPerSecond, setClicksPerSecond] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [cookies, setCookies] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setClicks((prevClicks) => prevClicks + clicksPerSecond * multiplier);
      setCookies((prevCookies) => prevCookies + clicksPerSecond * multiplier);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [clicksPerSecond, multiplier]);

  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + clicksPerSecond * multiplier);
    setCookies((prevCookies) => prevCookies + clicksPerSecond * multiplier);
  };

  const increaseClicksPerSecond = () => {
    setClicksPerSecond((prevCPS) => prevCPS + 1);
  };

  const resetAll = () => {
    setClicks(0);
    setClicksPerSecond(0);
    setMultiplier(1);
    setCookies(0);
  };

  const buyMultiplier = (cost, multiplierValue) => {
    if (cookies >= cost) {
      setMultiplier((prevMultiplier) => prevMultiplier * multiplierValue);
      setCookies((prevCookies) => prevCookies - cost);
    }
  };

  return (
    <div className="game-container">
      <h1>Clicker Game</h1>
      <div>
        <h2>Clicks: {clicks}</h2>
        <h3>Clicks per Second: {clicksPerSecond * multiplier}</h3>
        <h3>Cookies: {cookies}</h3>
      </div>
      <div>
        <button onClick={handleClick} className="click-button">
          Click Me!
        </button>
        <button onClick={increaseClicksPerSecond}>Increase CPS</button>
        <button onClick={resetAll}>Reset</button>
        <button onClick={() => buyMultiplier(100, 2)}>
          Buy 2x Multiplier (100 Cookies)
        </button>
        <button onClick={() => buyMultiplier(500, 5)}>
          Buy 5x Multiplier (500 Cookies)
        </button>
        <button onClick={() => buyMultiplier(2000, 10)}>
          Buy 10x Multiplier (2000 Cookies)
        </button>
      </div>
    </div>
  );
}
