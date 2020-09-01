import React, { useState } from 'react';
import './App.css';
import Player from './components/PlayerComponent.js';
import Buttons from './components/ButtonsComponent.js';

function App() {

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [activePlayer, setActivePlayer ] = useState(1);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Snooker Scorer</h1>
        <div className="player-names">
          <Player 
          playerNumber={1} 
          playerScore={player1Score} 
          activePlayer={activePlayer}
          />
          <Player 
          playerNumber={2} 
          playerScore={player2Score} 
          activePlayer={activePlayer}
          />
        </div>
        <Buttons 
        player1Score={player1Score} 
        player2Score={player2Score} 
        activePlayer={ activePlayer } 
        setActivePlayer={setActivePlayer} 
        setPlayer1Score={setPlayer1Score} 
        setPlayer2Score={setPlayer2Score} 
        />
      </header>
    </div>
  );
}

export default App;
