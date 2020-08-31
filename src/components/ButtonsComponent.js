import React from 'react';

const Buttons = ({player1Score, player2Score, isPlayerOne, setPlayer1Score, setPlayer2Score, setIsPlayerOne }) => {

const handleRed = () => {
    setPlayer1Score(player1Score += 1);
}

const handleYellow = () => {
    setPlayer1Score(player1Score += 2);
}

const handleGreen = () => {
    setPlayer1Score(player1Score += 3);
}

const handleBrown = () => {
    setPlayer1Score(player1Score += 4);
}

const handleBlue = () => {
    setPlayer1Score(player1Score += 5);
}

const handlePink = () => {
    setPlayer1Score(player1Score += 6);
}

const handleBlack = () => {
    setPlayer1Score(player1Score += 7);
}

const handleSwitchPlayer = () => {
    if(isPlayerOne === true) {
        setIsPlayerOne(false) 
    } else {
        setIsPlayerOne(true)
    }
    console.log(isPlayerOne)
}

    return (
<>
        <button onClick={handleRed}>RED</button>
        <button onClick={handleYellow}>YELLOW</button>
        <button onClick={handleGreen}>GREEN</button>
        <button onClick={handleBrown}>BROWN</button>
        <button onClick={handleBlue}>BLUE</button>
        <button onClick={handlePink}>PINK</button>
        <button onClick={handleBlack}>BLACK</button>
        <button onClick={handleSwitchPlayer}>SWITCH PLAYER</button>
        {/* <button>FOUL</button> */}
</>

    )
}

export default Buttons;