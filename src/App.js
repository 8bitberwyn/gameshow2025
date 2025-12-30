import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Scoreboard from './components/Scoreboard';
import Welcome from './pages/Welcome';
import Trivia from './pages/Trivia';
import Jeopardy from './pages/Jeopardy';
import Kahoot from './pages/Kahoot';
import Personality from './pages/Personality';
import Whothat from './pages/Whothat';
import Gamble from './pages/Gamble';
import Points from './pages/Points';

// import Game5 from './pages/Game5';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Scoreboard />
        <div style={{ marginLeft: '220px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/jeopardy" element={<Jeopardy />} />
            <Route path="/kahoot" element={<Kahoot />} />
            {/* <Route path="/personality" element={<Personality />} /> */}
            <Route path="/whothat" element={<Whothat />} />
            <Route path="/gamble" element={<Gamble />} />
            <Route path="/points" element={<Points />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
