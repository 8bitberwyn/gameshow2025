import React, { useState } from 'react';
import '../styles/Scoreboard.css';  // Import the CSS file

// Helper component for each player
function Player({ player, onEdit, onDelete, onScoreChange }) {
  const [score, setScore] = useState(player.score);

  const handleScoreChange = (e) => {
    const newScore = e.target.value;
    setScore(newScore);
    onScoreChange(player.id, newScore);  // Update the score in parent state
  };

  return (
    <div className="player-container">
      <input
        type="text"
        value={player.name}
        onChange={(e) => onEdit(player.id, e.target.value)}
        style={{ marginBottom: '8px' }}
      />
      <input
        type="number"
        value={score}
        onChange={handleScoreChange}
        style={{ width: '36px', marginBottom: '8px' }}
      />
      <button onClick={() => onDelete(player.id)}>
        🗑️
      </button>
    </div>
  );
}

// Main Scoreboard Component
function Scoreboard() {
  const [players, setPlayers] = useState([]);
  const [nextId, setNextId] = useState(1);

  // Add new player
  const addPlayer = () => {
    setPlayers([
      ...players,
      { id: nextId, name: `Player ${nextId}`, score: 0 },
    ]);
    setNextId(nextId + 1);
  };

  // Edit player name
  const editPlayerName = (id, newName) => {
    setPlayers(players.map(player => player.id === id ? { ...player, name: newName } : player));
  };

  // Delete player
  const deletePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  // Update player score
  const updateScore = (id, newScore) => {
    setPlayers(players.map(player => player.id === id ? { ...player, score: newScore } : player));
  };

  return (
    <div className="scoreboard-container">
      <button onClick={addPlayer} className="add-player-btn">
        Add Player
      </button>
      
      <div className="player-list">
        {players.map(player => (
          <Player
            key={player.id}
            player={player}
            onEdit={editPlayerName}
            onDelete={deletePlayer}
            onScoreChange={updateScore}
          />
        ))}
      </div>
    </div>
  );
}

export default Scoreboard;
