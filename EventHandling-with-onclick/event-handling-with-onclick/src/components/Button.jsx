import { useState } from "react";
import "./Button.css";
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
  const reset = () => setCount(0);

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
export default Counter;
