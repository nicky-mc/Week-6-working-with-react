import Counter from "./components/Button";
import Data from "./components/Data";
import "./App.css";
import "./components/Button.css";

export default function App() {
  return (
    <div className="page">
      <div className="App">
        <h1>Event Handling with onClick</h1>
        <Counter />
      </div>
      <div className="data">
        <Data />
      </div>
      <div className="main-lesson">
        <h3>How it works</h3>
        <p>
          When you click the button, the counter increments by 1. <br />
          When you click the button again, the counter increments by 1 again
          Clicking Decrement button will decrement the counter by 1 Clicking
          Reset button will reset the counter to 0{" "}
        </p>
        <h3>How it Works</h3>
        <p>
          onClick is an event listener that listens for a click event on the
          button element. When the button is clicked, the handleCount function
          is called.{" "}
        </p>
        <p>handleCount function increments the counter variable</p>
        <p>
          The updated counter value is then rendered to the screen. <br />
          useState is a React hook that allows you to manage state in a
          functional component. In this case, the counter variable is managed by
          useState.{" "}
        </p>
      </div>
      <div className="footer">
        <p>© 2024 - Nicky Mortoza-Cowles</p>
      </div>
    </div>
  );
}
