import React, { useState } from 'react';
import '../styles/Kahoot.css'; // Import the CSS file for styling

function Kahoot() {
  const [contentIndex, setContentIndex] = useState(0);

  // Text content for the page
  const content = [
    { type: "heading", text: "Kahoot TIMEEE" },
    { type: "text", text: "Get your phones out..." },
    { type: "text", text: "Because it's TIME" },
    { type: "text", text: "FOR" },
    { type: "text", text: "SOME" },
    { type: "text", text: "WHEEEELLL SPINNINGGGGGG" },
    { type: "text", text: "and also kahoot!" }
  ];

  // Handle click to reveal next content
  const handleClick = () => {
    if (contentIndex < content.length - 1) {
      setContentIndex(contentIndex + 1);
    }
  };

  // Render content based on type (text or heading)
  const renderContent = () => {
    const item = content[contentIndex];
    if (item.type === "text") {
      // Bold capitalized words and ensure spacing between them
      const words = item.text.split(' ').map((word, index) => {
        return word.toUpperCase() === word ? (
          <b key={index}>{word}</b>
        ) : (
          <span key={index}>{word}</span>
        );
      });
      return <p>{words.reduce((prev, curr) => [prev, ' ', curr])}</p>;  // Add space between words
    } else if (item.type === "heading") {
      return <h1>{item.text}</h1>;
    }
  };

  return (
    <div className="kahoot-container" onClick={handleClick}>
      {renderContent()}
    </div>
  );
}

export default Kahoot;