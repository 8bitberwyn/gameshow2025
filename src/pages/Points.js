import React, { useState } from 'react';
import '../styles/Points.css';

function Points() {
  const [openTiers, setOpenTiers] = useState({
    tier1: false,
    tier2: false,
    tier3: false,
    tier4: false
  });

  const toggleTier = (tier) => {
    setOpenTiers(prev => ({
      ...prev,
      [tier]: !prev[tier]
    }));
  };

  const shopData = {
    tier1: [
      { name: "Jump into Mortlake", cost: 12000, limit: "1x per player" },
      { name: "Pick 2 players, they each send you $20 and $5 to Berwyn", cost: 10000, limit: "1x per player" }
    ],
    tier2: [
      { name: "Pick 2 players, They take shirts off and hug for 20 seconds", cost: 4000, limit: "1x per player" },
      { name: "Pick 2 players, They send you and Berwyn $5 each", cost: 3000, limit: "1x per player" },
      { name: "Pick a player to apply black face paint on their faces", cost: 5000, limit: "1x per player" },
      { name: "Gain a tier 2 punishment immunity", cost: 4000, limit: "1 per player" }
    ],
    tier3: [
      { name: "Pick 2 players to act out 2 discord edaters SUPER CRINGE!", cost: 2000, limit: "∞ per player" },
      { name: "Pick a player to drink some chicken feet juice", cost: 1000, limit: "∞ per player" },
      { name: "Pick a player to take a picture with Berwyn's Body Pillow", cost: 1000, limit: "∞ per player" },
      { name: "Pick a player to slap their ass to a degree of your choosing with a slipper", cost: 1500, limit: "∞ per player" },
      { name: "Gain a tier 3 punishment immunity", cost: 1000, limit: "3 per player" }
    ],
    tier4: [
      { name: "Pick a player for Berwyn to slap their ass, Mums it will be light", cost: "1-100", limit: "∞ per player" },
      { name: "Pick a player to do their best Speed impression", cost: 500, limit: "∞ per player" },
      { name: "Pick a player to sit on while they do a plank until they cant no more", cost: 500, limit: "∞ per player" },
      { name: "Gain a tier 4 punishment immunity", cost: 500, limit: "5 per player" }
    ]
  };

  const tierConfigs = {
    tier1: { label: 'LEGENDARY TIER', class: 'tier-legendary' },
    tier2: { label: 'EPIC TIER', class: 'tier-epic' },
    tier3: { label: 'RARE TIER', class: 'tier-rare' },
    tier4: { label: 'COMMON TIER', class: 'tier-common' }
  };

  const renderTier = (tierKey, items) => {
    const config = tierConfigs[tierKey];
    const isOpen = openTiers[tierKey];
    
    return (
      <div className={`tier-container ${config.class}`}>
        <div 
          className="tier-header"
          onClick={() => toggleTier(tierKey)}
        >
          <h2 className="tier-title">{config.label}</h2>
          <span className="tier-arrow">{isOpen ? '▼' : '▶'}</span>
        </div>
        {isOpen && (
          <div className="tier-content">
            {items.map((item, index) => (
              <div key={index} className="shop-item">
                <div className="item-name">{item.name}</div>
                <div className="item-details">
                  <div className="item-cost">
                    {typeof item.cost === 'number' ? item.cost.toLocaleString() : item.cost} pts
                  </div>
                  <div className="item-limit">{item.limit}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="points-container">
      <div className="background-overlay"></div>

      <div className="main-content">
        <div className="header">
          <h1 className="header-title">⚔️ POINTS EMPORIUM ⚔️</h1>
          <p className="header-subtitle">Choose Your Opponents Fates...</p>
        </div>

        <div className="tiers-wrapper">
          {renderTier('tier1', shopData.tier1)}
          {renderTier('tier2', shopData.tier2)}
          {renderTier('tier3', shopData.tier3)}
          {renderTier('tier4', shopData.tier4)}
        </div>

        <div className="footer">
          <p>~ May your choices be wise, adventurer ~</p>
        </div>
      </div>
    </div>
  );
}

export default Points;