import React, { useState } from 'react';
import '../styles/Welcome.css';

function Welcome() {
  const [contentIndex, setContentIndex] = useState(0);

  const content = [
    { type: "heading", text: "Welcome to the Game Show!" },
    { type: "text", text: "Get ready for a fun time!" },
    { type: "heading", text: "Rules and stuff" },
    { type: "text", text: "You will all be playing in a series of minigames." },
    { type: "text", text: "In each game, you will be able to earn points depending on your performance." },
    { type: "text", text: "The points you earn will be very useful at the end of the game, they are not just for ranking purposes." },
    { type: "text", text: "I repeat, the points you earn will have practical use!" },
    { type: "text", text: "Do not give up even if you are behind, EVERY POINT MATTERS!" },
    { type: "text", text: "Additionally, there will be random events..." },
    { type: "text", text: "These events can occur at any moment throughout the gameshow!" },
    { type: "text", text: "Speaking of which, let's spin THE NHEEL" },
    { type: "text", text: "So yeah, thats everything." },
    { type: "text", text: "Without further Ado (Usee usee usee wa!)" },
    { type: "heading", text: "Let's begin!!!" }
  ];

  const handleClick = () => {
    if (contentIndex < content.length - 1) {
      setContentIndex(contentIndex + 1);
    }
  };

  const renderContent = () => {
    const item = content[contentIndex];
    if (item.type === "text") {
      return <p className="game-text">{item.text}</p>;
    } else if (item.type === "heading") {
      return <h1 className="game-heading">{item.text}</h1>;
    } else if (item.type === "image") {
      return <img src={item.image} alt="Placeholder" className="image-placeholder" />;
    }
  };

  return (
    <div className="welcome-container" onClick={handleClick}>
      <div className="spotlight spotlight-1"></div>
      <div className="spotlight spotlight-2"></div>
      <div className="spotlight spotlight-3"></div>
      <div className="confetti-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="confetti" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8b94'][Math.floor(Math.random() * 5)]
          }}></div>
        ))}
      </div>
      <div className="content-wrapper">
        <div className="stage-lights"></div>
        {renderContent()}
      </div>
    </div>
  );
}

export default Welcome;