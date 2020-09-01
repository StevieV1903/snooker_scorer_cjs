import React from 'react';
import './ButtonsComponent.css'

const Buttons = ({player1Score, player2Score, activePlayer, setPlayer1Score, setPlayer2Score, setActivePlayer, player1Break, player2Break, setPlayer1Break, setPlayer2Break, player1Breaks, setPlayer1Breaks, player2Breaks, setPlayer2Breaks }) => {

const handleRed = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 1);
        setPlayer1Break(player1Break += 1)
    }else {
        setPlayer2Score(player2Score += 1);
        setPlayer2Break(player2Break += 1)
    }
}

const handleYellow = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 2);
        setPlayer1Break(player1Break += 2)
    }else {
        setPlayer2Score(player2Score += 2);
        setPlayer2Break(player2Break += 2)
    }
}

const handleGreen = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 3);
        setPlayer1Break(player1Break += 3)
    }else {
        setPlayer2Score(player2Score += 3);
        setPlayer2Break(player2Break += 3)
    }
}

const handleBrown = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 4);
        setPlayer1Break(player1Break += 4)
    }else {
        setPlayer2Score(player2Score += 4);
        setPlayer2Break(player2Break += 4)
    }
}

const handleBlue = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 5);
        setPlayer1Break(player1Break += 5)
    }else {
        setPlayer2Score(player2Score += 5);
        setPlayer2Break(player2Break += 5)
    }
}

const handlePink = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 6);
        setPlayer1Break(player1Break += 6)
    }else {
        setPlayer2Score(player2Score += 6);
        setPlayer2Break(player2Break += 6)
    }
}

const handleBlack = () => {
    if(activePlayer === 1) {
    setPlayer1Score(player1Score += 7);
    setPlayer1Break(player1Break += 7)
}else {
    setPlayer2Score(player2Score += 7);
    setPlayer2Break(player2Break += 7)
    }
}

const handleEndFrame = () => {
    setPlayer1Score(0)
    setPlayer2Score(0)
}

const handleSwitchPlayer = () => {
    if(activePlayer === 1) {
        setActivePlayer(2)
        let highBreaks = player1Breaks
        highBreaks.push(player1Break)
        highBreaks.sort((a, b) => b - a)
        setPlayer1Breaks(highBreaks)
        // player1Breaks.sort((a, b) => b - a)
        setPlayer1Break(0)
         
    } else {
        setActivePlayer(1)
        let highBreaks = player2Breaks
        highBreaks.push(player2Break)
        highBreaks.sort((a, b) => b - a)
        setPlayer2Breaks(highBreaks)
        setPlayer2Break(0)
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