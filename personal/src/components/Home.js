import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // 10-second timer
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else {
      setIsGameOver(true); // End the game when time reaches 0
    }

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [timeLeft]);

  const handleClick = () => {
    if (!isGameOver) {
      setClicks(clicks + 1);
    }
  };

  const resetGame = () => {
    setClicks(0);
    setTimeLeft(10);
    setIsGameOver(false);
  };

  return (
    <div className="home-container">
      <h1>Welcome to My Profile</h1>
      <p>Try out this simple mini-game!</p>

      <div className="game-container">
        <h2>Click the Button!</h2>
        <p>Time left: {timeLeft} seconds</p>
        <p>Clicks: {clicks}</p>
        {!isGameOver ? (
          <button onClick={handleClick} className="game-button">
            Click Me!
          </button>
        ) : (
          <p className="game-over-text">Game Over! You clicked {clicks} times.</p>
        )}
        {isGameOver && (
          <button onClick={resetGame} className="reset-button">Restart Game</button>
        )}
      </div>
    </div>
  );
};

export default Home;
