import { useState } from "react";
import "./IceCreamContainer.css";

export default function IceCreamContainer(props) {
  const [showInfo, setShowInfo] = useState(false); // showInfo is a state variable that will be used to toggle the display of the ice cream information
  function handleClick() {
    setShowInfo(!showInfo);
  }
  return (
    <div className="ice-cream-container">
      <img src={props.imagePath} alt={`${props.name} ice cream`} />
      <h2 className="ice-cream-name" onClick={handleClick}>
        {props.name}
      </h2>
      {showInfo ? (
        <div className="ice-cream-info">
          <p>Cost £{props.cost}</p>
          <p>Flavor: {props.flavour}</p>
        </div>
      ) : null}
    </div>
  );
}
