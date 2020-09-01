import React from 'react';
import './ButtonsComponent.css'

const Buttons = ({player1Score, player2Score, activePlayer, setPlayer1Score, setPlayer2Score, setActivePlayer }) => {

const handleRed = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 1);
    }else {
        setPlayer2Score(player2Score += 1);
    }
}

const handleYellow = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 2);
    }else {
        setPlayer2Score(player2Score += 2);
    }
}

const handleGreen = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 3);
    }else {
        setPlayer2Score(player2Score += 3);
    }
}

const handleBrown = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 4);
    }else {
        setPlayer2Score(player2Score += 4);
    }
}

const handleBlue = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 5);
    }else {
        setPlayer2Score(player2Score += 5);
    }
}

const handlePink = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 6);
    }else {
        setPlayer2Score(player2Score += 6);
    }
}

const handleBlack = () => {
    if(activePlayer === 1) {
    setPlayer1Score(player1Score += 7);
}else {
    setPlayer2Score(player2Score += 7);
    }
}

const handleEndFrame = () => {
    setPlayer1Score(0)
    setPlayer2Score(0)
}

const handleSwitchPlayer = () => {
    if(activePlayer === 1) {
        setActivePlayer(2) 
    } else {
        setActivePlayer(1)
    }
    console.log(activePlayer)
}

    return (
<>
        <div id="button-container">
            <button id="red-button" onClick={handleRed}>RED</button>
            <button id="yellow-button" onClick={handleYellow}>YELLOW</button>
            <button id="green-button" onClick={handleGreen}>GREEN</button>
            <button id="brown-button" onClick={handleBrown}>BROWN</button>
            <button id="blue-button" onClick={handleBlue}>BLUE</button>
            <button id="pink-button" onClick={handlePink}>PINK</button>
            <button id="black-button" onClick={handleBlack}>BLACK</button>
            <br></br>
            <button className="game-button" onClick={handleSwitchPlayer}>SWITCH PLAYER</button>
            <button className="game-button" onClick={handleEndFrame}>END FRAME</button>
            {/* <button>FOUL</button> */}
        </div>
</>

    )
}

export default Buttons;