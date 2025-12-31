import React, { useState } from 'react';
import '../styles/Whothat.css';

function Whothat() {
  const [contentIndex, setContentIndex] = useState(0);

  const content = [
    { type: "heading", text: "Who is That???" },
    { type: "text", text: "But first..." },
    { type: "heading", text: "Let's roll some DICE" },
    { type: "text", text: "Everyone will take turns rolling 2 dice in order of ranking 1st to last" },
    { type: "text", text: "Before rolling, the player will pick any player including themselves" },
    { type: "text", text: "The player will then roll the dice 2 times:" },
    { type: "text", text: "The first dice corresponds to the number of points x 100" },
    { type: "text", text: "The second dice decides whether it will be positive or negative, 1-3 is neg, 4-6 is pos" },
    { type: "heading", text: "Now... let's guess some NEGOOOSSS" },
    {
      type: "link",
      text: "Open the Guessing Game",
      url: "https://docs.google.com/presentation/d/1tnHEb1OL7oq6-RflUQYlEjxfCUBZlHCbw2bKIN1iKIM/edit?usp=sharing",
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
    <div className="whothat-container" onClick={handleClick}>
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

export default Whothat;