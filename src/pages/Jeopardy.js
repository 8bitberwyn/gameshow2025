import React, { useState } from 'react';
import '../styles/Jeopardy.css';

function Jeopardy() {
  const [contentIndex, setContentIndex] = useState(0);

  const content = [
    { type: "heading", text: "Jeopardy Time!!" },
    { type: "text", text: "There are 5 categories" },
    { type: "text", text: "Each category has 5 questions which get harder" },
    { type: "text", text: "Harder questions give more points!" },
    { type: "text", text: "First person to hit the target with the ball will choose a tile." },
    { type: "text", text: "If the person who hit the target gets it wrong, the person with the lowest points gets to answer" },
    { type: "text", text: "Okay... LET'S START. But also wheel time LOL!" },
    {
      type: "link",
      text: "Jeopardy Game Link",
      url: "https://jeopardylabs.com/play/2025-12-30-648",
    },
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
    } else if (item.type === "link") {
      return (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="game-link">
          {item.text}
        </a>
      );
    }
  };

  return (
    <div className="jeopardy-container" onClick={handleClick}>
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

export default Jeopardy;