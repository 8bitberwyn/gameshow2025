import React, { useState } from 'react';
import '../styles/Jeopardy.css'; // Import the Jeopardy CSS file for styling

function Jeopardy() {
  const [contentIndex, setContentIndex] = useState(0);

  // Text content for the page
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

  // Handle click to reveal next content
  const handleClick = () => {
    if (contentIndex < content.length - 1) {
      setContentIndex(contentIndex + 1);
    }
  };

  // Render content based on type (text, heading, or link)
  const renderContent = () => {
    const item = content[contentIndex];
    if (item.type === "text") {
      return <p>{item.text}</p>;
    } else if (item.type === "heading") {
      return <h1>{item.text}</h1>;
    } else if (item.type === "link") {
      return (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="link">
          {item.text}
        </a>
      );
    }
  };

  return (
    <div className="jeopardy-container" onClick={handleClick}>
      {renderContent()}
    </div>
  );
}

export default Jeopardy;
