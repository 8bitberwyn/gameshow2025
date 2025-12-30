import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';  // Import the CSS file for the sidebar styling

function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2>IMAGE HERE</h2>
      <ul>
        <li><Link to="/">Welcome</Link></li>
        <li><Link to="/Trivia">General Trivia</Link></li>
        <li><Link to="/Jeopardy">Jeopardy</Link></li>
        <li><Link to="/Kahoot">Kahoot</Link></li>
        {/* <li><Link to="/Personality">Personality</Link></li> */}
        <li><Link to="/Whothat">Who's That?</Link></li>
        <li><Link to="/Gamble">The Star</Link></li>
        <li><Link to="/Points">Points Time</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
