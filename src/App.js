import React, { useState } from 'react';
import './App.css';
import Player from './components/PlayerComponent.js';
import Buttons from './components/ButtonsComponent.js';
import FrameScorer from './components/FrameScore.js';

function App() {

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [activePlayer, setActivePlayer ] = useState(1);
  const [player1Break, setPlayer1Break ] = useState(0);
  const [player2Break, setPlayer2Break ] = useState(0);
  const [player1Breaks, setPlayer1Breaks] = useState([]);
  const [player2Breaks, setPlayer2Breaks] = useState([]);
  const [player1Frames, setPlayer1Frames] = useState(0)
  const [player2Frames, setPlayer2Frames] = useState(0)



  return (
    <div className="App">
      <header className="App-header">
        <h1>Snooker Scorer</h1>
        <div className="player-names">
          <Player 
          playerNumber={1} 
          playerScore={player1Score} 
          activePlayer={activePlayer}
          playerBreak={player1Break}
          playerBreaks={player1Breaks}
          />
          <FrameScorer 
          player1Frames={player1Frames}
          player2Frames={player2Frames}
          />
          <Player 
          playerNumber={2} 
          playerScore={player2Score} 
          activePlayer={activePlayer}
          playerBreak={player2Break}
          playerBreaks={player2Breaks}
          />
        </div>
        <Buttons 
        player1Score={player1Score} 
        player2Score={player2Score} 
        activePlayer={ activePlayer } 
        setActivePlayer={setActivePlayer} 
        setPlayer1Score={setPlayer1Score} 
        setPlayer2Score={setPlayer2Score}
        player1Break={player1Break}
        player2Break={player2Break}
        setPlayer1Break={setPlayer1Break}
        setPlayer2Break={setPlayer2Break}
        player1Breaks={player1Breaks}
        player2Breaks={player2Breaks}
        setPlayer1Breaks={setPlayer1Breaks}
        setPlayer2Breaks={setPlayer2Breaks}
        player1Frames={player1Frames}
        player2Frames={player2Frames}
        setPlayer1Frames={setPlayer1Frames}
        setPlayer2Frames={setPlayer2Frames}


        />
      </header>
    </div>
  );
}

export default App;
