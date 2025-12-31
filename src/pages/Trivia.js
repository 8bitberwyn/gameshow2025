import React, { useState } from 'react';
import '../styles/Trivia.css';  // Import the CSS file for styling

// Trivia questions and options
const triviaData = [
  {
    question: "1. What is the animal for next year (2026) according to the Chinese zodiac?",
    options: ["Rabbit", "Dragon", "Snake", "Horse"],
  },
  {
    question: "2. What is the only planet in our solar system that rotates clockwise?",
    options: ["Venus", "Uranus", "Mars", "Neptune"],
  },
  {
    question: "3. What is the smallest country in the world by land area?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
  },
  {
    question: "4. How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
  },
  {
    question: "5. What is the most spoken language in the world by number of native speakers?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
  },
  {
    question: "6. In what year did the Berlin Wall fall? (If you get this right, you get it wrong)",
    options: ["1987", "1989", "1991", "1993"],
  },
  {
    question: "7. What is the longest river in the world? Also, EVERYONE HOP ON TODAYS WORDLE!!",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
  },
  {
    question: "8. How many bones does an adult human have?",
    options: ["186", "206", "226", "246"],
  },
  {
    question: "9. What is the capital city of Austrulia?",
    options: ["Sydney", "Melburne", "Canberra", "Brisbane"],
  },
  {
    question: "10. Which element has the chemical symbol 'Sb'?",
    options: ["Antimony", "Silver", "Palladium", "Selebium"],
  },
  {
    question: "11. What year was the first iPhone released?",
    options: ["2005", "2007", "2009", "2011"],
  },
  {
    question: "12. What group of 'creatures' does the term 'asinine' refer to?",
    options: ["Clowns", "People of African descent", "Dragons", "Donkeys"],
  },
  {
    question: "13. What was the highest sold type of medication in Australia in 2024?",
    options: ["Diabetes Medication", "Cholesterol Medication", "Cancer Medication", "Stomach/acid reflux medication"],
  },
  {
    question: "14. How many zeroes does the number googol have?",
    options: ["100", "1000", "10000", "100000"],
  },
  {
    question: "15. What is the nickname of the horse Rice Shower?",
    options: ["Wedding Blessing", "The Black Assasin", "Supercar", "Overlord of Century's End"],
  },
  {
    question: "16. According to Greek Mythology, whose cock got chopped off and resulted in the birth of the goddess of beauty Aphrodite?",
    options: ["Chronos", "Zeus", "Uranus", "Ur mother"],
  },
  {
    question: "17. What year did man first land on the moon?",
    options: ["1969", "1950", "1999", "1984"],
  },
  {
    question: "18. How many 'Diary of a Wimpy Kid' books are there currently? also... PUSH UP CHALLENGE TIME!",
    options: ["10", "15", "20", "25"],
  },
  {
    question: "19. Highest grossing movie of all time? ALSO WHEEL TIMEEEEEE",
    options: ["Avatar: The Way of Water (2022)", "Avatar: The Last Airbender (2005)", "Avatar (2009)", "Avatar: Endgame"],
  },
  {
    question: "20. What is a 'Smoot'?",
    options: ["A unit of measurement", "A character from an old British series", "An old fashioned term for retarded people", "A term used to describe a sound"],
  },
  {
    question: "21. Which one of the following is not a tarot card?",
    options: ["The Lovers", "The Obedient", "The Fool", "Temperance"],
  },
];

function Trivia() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle going to the previous question
  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0);
  };

  // Handle going to the next question
  const goToNextSlide = () => {
    setCurrentSlide(currentSlide < triviaData.length - 1 ? currentSlide + 1 : triviaData.length - 1);
  };

  return (
    <div className="trivia-container">
      <div className="question-slide">
        <h2>{triviaData[currentSlide].question}</h2>
        <div className="options">
          {triviaData[currentSlide].options.map((option, index) => (
            <div key={index} className="option">
              <span>{String.fromCharCode(65 + index)}.</span> {option}
            </div>
          ))}
        </div>
      </div>
      <div className="navigation">
        <button onClick={goToPreviousSlide} className="arrow-button">
          &#8592; {/* Left Arrow */}
        </button>
        <button onClick={goToNextSlide} className="arrow-button">
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
}

export default Trivia;
