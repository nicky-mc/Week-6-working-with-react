import { useEffect, useState } from "react";
import "./app.css";
// this is the main component
export default function App() {
  // a hook in react that allows you to perform side effects in your functional components the difference between a hook and a function is that a hook can have a state and a function can't as well as a hook can have a lifecycle method and a function can't useEffect is a hook that allows you to perform side effects in your functional components useEffect takes two arguments the first argument is a function that will be executed when the component mounts and the second argument is an array of dependencies that will trigger the function to be executed when the dependencies change
  // useState to keep track of the number of clicks and variable to update the number of clicks per second and multiplier and cookies in the game
  const [clicks, setClicks] = useState(0);
  const [clicksPerSecond, setClicksPerSecond] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [cookies, setCookies] = useState(0);
  // useEffect to update the number of clicks and cookies every second
  useEffect(() => {
    // setInterval to update the number of clicks and cookies every second
    const myInterval = setInterval(() => {
      setClicks((prevClicks) => prevClicks + clicksPerSecond * multiplier);
      setCookies((prevCookies) => prevCookies + clicksPerSecond * multiplier);
    }, 1000);
    // return to clear the interval
    return () => {
      clearInterval(myInterval);
    };
  }, [clicksPerSecond, multiplier]);
  // handleClick function to update the number of clicks and cookies
  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + clicksPerSecond * multiplier);
    setCookies((prevCookies) => prevCookies + clicksPerSecond * multiplier);
  };
  // increaseClicksPerSecond function to update the number of clicks per second
  const increaseClicksPerSecond = () => {
    setClicksPerSecond((prevCPS) => prevCPS + 1);
  };
  // resetAll function to reset all the values
  const resetAll = () => {
    setClicks(0);
    setClicksPerSecond(0);
    setMultiplier(1);
    setCookies(0);
  };
  // buyMultiplier function to buy the multiplier
  const buyMultiplier = (cost, multiplierValue) => {
    if (cookies >= cost) {
      setMultiplier((prevMultiplier) => prevMultiplier * multiplierValue);
      setCookies((prevCookies) => prevCookies - cost);
    }
  };
  // return the JSX
  return (
    // div to contain the game
    <div className="game-container">
      <h1>Clicker Game</h1>
      <div>
        {/* display the number of clicks, clicks per second, and cookies */}
        <h2>Clicks: {clicks}</h2>
        <h3>Clicks per Second: {clicksPerSecond * multiplier}</h3>
        <h3>Cookies: {cookies}</h3>
      </div>
      <div>
        {/* buttons to click, increase CPS, reset, and buy multipliers */}
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
