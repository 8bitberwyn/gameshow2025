import React from 'react';
import '../styles/Gamble.css';

function Gamble() {
  const gambleOptions = [
    {
      title: "♠️ Blackjack ♥️",
      description: "Play a game of blackjack against a person of your choosing.",
      reward: "Win: +1000 points",
      penalty: "Lose: -500 points",
      icon: "🎴"
    },
    {
      title: "🃏 Play Big 2 Against Berwyn",
      description: "Deck will be split into 3 piles with Jokers. You have 2 minutes from the moment you pick up your cards to beat Berwyn.",
      reward: "Win: +1500 points",
      penalty: "Lose: -1000 points",
      icon: "🎯"
    },
    {
      title: "🎰 Spin the Wheel of Misfortune",
      description: "Spend 250 points to spin the wheel of misfortune...",
      reward: "Cost: 250 points",
      penalty: "Outcome: ???",
      icon: "🎡"
    }
  ];

  return (
    <div className="gamble-container">
      <div className="gamble-background-overlay"></div>

      <div className="gamble-main-content">
        <div className="gamble-header">
          <h1 className="gamble-header-title">Have You Ever Gambled With Your Life On The Line?</h1>
          <p className="gamble-instructions">
            First, all players MUST spin the Wheel we are so very familiar with <strong>ONCE</strong>. Then, all players will be able to do the below options <strong>ONCE</strong> each. You do <strong>NOT</strong> have to do them but if you choose to do that you may only do so at the price of <strong>500 points</strong>.
          </p>
        </div>

        <div className="gamble-cards-container">
          {gambleOptions.map((option, index) => (
            <div key={index} className="gamble-card">
              <div className="gamble-card-icon">{option.icon}</div>
              <h2 className="gamble-card-title">{option.title}</h2>
              <p className="gamble-card-description">{option.description}</p>
              <div className="gamble-card-outcomes">
                <div className="outcome-reward">{option.reward}</div>
                <div className="outcome-penalty">{option.penalty}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="gamble-footer">
          <p>⚠️ Choose wisely... Fortune favors the bold ⚠️</p>
        </div>
      </div>
    </div>
  );
}

export default Gamble;