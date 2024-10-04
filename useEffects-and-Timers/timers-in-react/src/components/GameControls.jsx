import "react";

const GameControls = ({
  handleClick,
  increaseClicksPerSecond,
  resetAll,
  buyMultiplier,
}) => {
  return (
    <div className="game-controls">
      <button onClick={handleClick} className="click-button">
        Click Me!
      </button>
      <button onClick={increaseClicksPerSecond}>Increase CPS</button>
      <button onClick={resetAll}>Reset All</button>
      <button onClick={() => buyMultiplier(100, 2)}>2x Multiplier (100)</button>
      <button onClick={() => buyMultiplier(500, 5)}>5x Multiplier (500)</button>
      <button onClick={() => buyMultiplier(2000, 10)}>
        10x Multiplier (2000)
      </button>
    </div>
  );
};

export default GameControls;
