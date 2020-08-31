import React, { useState } from 'react';
import './PlayerComponent.css';


const Player = ({ playerNumber, playerScore }) => {

    const [ playerName, setPlayerName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Submitting Name ${playerName}`)
    }

    

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

    <h1>Player { playerNumber }: {playerName}</h1>
    <h2>Score: { playerScore }</h2>
</div>
    
    </>


)
};

export default Player;