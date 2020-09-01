import React, { useState } from 'react';
import './PlayerComponent.css';


const Player = ({ playerNumber, playerScore, activePlayer, playerBreak, playerBreaks }) => {

    const [ playerName, setPlayerName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Submitting Name ${playerName}`)
    }

    // const playerAtTable = () => {
    //     const atTable = ""
    // if(playerNumber === 1 && activePlayer === true){
    //     atTable = <h3>AT TABLE</h3>
    //   } else {
    //     atTable = <h3></h3>
    //   }
    //   return atTable
    // }



return (
    <>
    
<div>
    <form onSubmit={handleSubmit}>
        <label>
            Name:
        <input type="text" value={playerName} 
        onChange={event => setPlayerName(event.target.value)}
        placeholder="Enter Name"  required/> 
        
        {/* <input type="submit" value="Submit" />   */}
        </label> 
    </form>

    <h1 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}>Player { playerNumber }: {playerName}</h1>
    {/* {activePlayer && <h3>AT TABLE</h3>} */}
    {/* {playerAtTable} */}
    
    <h2 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}>Score: { playerScore }</h2>

    <h2 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}> Break: {playerBreak} </h2>

    <h2 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}>Highest Break: {playerBreaks[0]} </h2>
</div>
    
    </>


)
};

export default Player;