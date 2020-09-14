import React from 'react';
import './PlayerComponent.css';


const Player = (
    { playerNumber, playerScore, activePlayer, playerBreak, playerBreaks, playerName }
    ) => {



return (
    <>
    
        {/* <div className="player-container">
            
            <h1 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}> { playerName }</h1>
            
            <h2 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}>Score: { playerScore }</h2>

            <h2 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}> Break: { playerBreak } </h2>

            <h2 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}>High Break: { playerBreaks[0] } </h2>
        </div> */}

        <div className={activePlayer === playerNumber ? "active-player" : "non-active-player"}>
            
            <h1>{ playerName }</h1>
            
            <h2>Score: { playerScore }</h2>

            <h2> Break: { playerBreak } </h2>

            <h2>High Break: { playerBreaks[0] } </h2>
        </div>
    
    </>
)
};

export default Player;