import { useState } from "react";
import "./Button.css";
//this function is a counter that increments by 1, decrements by 1, and resets to ) when the relevant button is clicked
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      alert("Cannot go below 0");
    }
  };
  //this function resets the counter to 0
  const reset = () => setCount(0);
  // this is the JSX that will be rendered to the screen
  return (
    <>
      <br />
      <h2>{count}</h2>
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
//this exports the Counter function to be used in other files
export default Counter;
