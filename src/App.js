import React, { useState } from 'react';
import './App.css';
import Player from './components/PlayerComponent.js';
import Buttons from './components/ButtonsComponent.js';

function App() {

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [isPlayerOne, setIsPlayerOne ] = useState(true);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Snooker Scorer</h1>
        <div className="player-names">
          <Player 
          playerNumber="1" 
          playerScore={player1Score} 
          isPlayerOne={isPlayerOne}
          />
          <Player 
          playerNumber="2" 
          playerScore={player2Score} 
          isPlayerOne={isPlayerOne}
          />
        </div>
        <Buttons 
        player1Score={player1Score} 
        player2Score={player2Score} 
        isPlayerOne={ isPlayerOne } 
        setIsPlayerOne={setIsPlayerOne} 
        setPlayer1Score={setPlayer1Score} 
        setPlayer2Score={setPlayer2Score} 
        />
      </header>
    </div>
  );
}

export default App;
