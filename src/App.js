import React from 'react';
import './App.css';
import Player from './components/PlayerComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Snooker Scorer</h1>
        <div className="player-names">
          <Player playerNumber="1"/>
          <Player playerNumber="2"/>
        </div>
      </header>
    </div>
  );
}

export default App;
