import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="logo-placeholder">🎮</div>
        <h2 className="sidebar-title">GAME SHOW</h2>
      </div>
      <div className="sidebar-glow"></div>
      <ul className="sidebar-menu">
        <li><Link to="/" className="sidebar-link">🏠 Welcome</Link></li>
        <li><Link to="/Trivia" className="sidebar-link">🧠 General Trivia</Link></li>
        <li><Link to="/Jeopardy" className="sidebar-link">❓ Jeopardy</Link></li>
        <li><Link to="/Kahoot" className="sidebar-link">📱 Kahoot</Link></li>
        <li><Link to="/Whothat" className="sidebar-link">👤 Who's That?</Link></li>
        <li><Link to="/Gamble" className="sidebar-link">⭐ The Star</Link></li>
        <li><Link to="/Points" className="sidebar-link">💎 Points Time</Link></li>
      </ul>
      <div className="sidebar-footer">
        <div className="pulse-dot"></div>
        <span>LIVE</span>
      </div>
    </div>
  );
}

export default Sidebar;