import "react";

const GameStats = ({ clicks, clicksPerSecond, multiplier, cookies }) => {
  return (
    <div className="game-stats">
      <div className="stat-container">
        <h3>Clicks</h3>
        <div className="digital-display">{clicks}</div>
      </div>
      <div className="stat-container">
        <h3>CPS</h3>
        <div className="digital-display">{clicksPerSecond * multiplier}</div>
      </div>
      <div className="stat-container">
        <h3>Cookies</h3>
        <div className="digital-display">{Math.floor(cookies)}</div>
      </div>
    </div>
  );
};

export default GameStats;
