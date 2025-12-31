import React, { useState } from 'react';
import '../styles/Scoreboard.css';

function Player({ player, onEdit, onDelete, onScoreChange }) {
  const [score, setScore] = useState(player.score);

  const handleScoreChange = (e) => {
    const newScore = e.target.value;
    setScore(newScore);
    onScoreChange(player.id, newScore);
  };

  return (
    <div className="player-card">
      <div className="player-info">
        <input
          type="text"
          value={player.name}
          onChange={(e) => onEdit(player.id, e.target.value)}
          className="player-name-input"
          maxLength={20}
        />
        <div className="score-display">
          <input
            type="number"
            value={score}
            onChange={handleScoreChange}
            className="player-score-input"
            max={999999}
          />
          <span className="points-label">PTS</span>
        </div>
      </div>
      <button onClick={() => onDelete(player.id)} className="delete-btn">
        🗑️
      </button>
    </div>
  );
}

function Scoreboard() {
  const [players, setPlayers] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addPlayer = () => {
    setPlayers([
      ...players,
      { id: nextId, name: `Player ${nextId}`, score: 0 },
    ]);
    setNextId(nextId + 1);
  };

  const editPlayerName = (id, newName) => {
    setPlayers(players.map(player => player.id === id ? { ...player, name: newName } : player));
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const updateScore = (id, newScore) => {
    setPlayers(players.map(player => player.id === id ? { ...player, score: newScore } : player));
  };

  return (
    <div className="scoreboard-container">
      <div className="scoreboard-glow-top"></div>
      <div className="scoreboard-content">
        <button onClick={addPlayer} className="add-player-btn">
          ➕
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
    </div>
  );
}

export default Scoreboard;