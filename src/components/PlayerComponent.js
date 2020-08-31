import React, { useState } from 'react';
import './PlayerComponent.css';


const Player = ({ playerNumber }) => {

    const [ playerName, setPlayerName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting Name ${playerName}`)
    }

    // const handleChange = (event) => {

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

    <h1>Player { playerNumber }: {playerName}</h1>
</div>
    
    </>


)
};

export default Player;