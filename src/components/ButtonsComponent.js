import React, { useState, useEffect } from 'react';
import swal from '@sweetalert/with-react'
import './ButtonsComponent.css';
import FoulButtons from "./FoulButtons.js";

const Buttons = ({player1Score, player2Score, activePlayer, setPlayer1Score, setPlayer2Score, setActivePlayer, player1Break, player2Break, setPlayer1Break, setPlayer2Break, player1Breaks, setPlayer1Breaks, player2Breaks, setPlayer2Breaks, player1Frames, player2Frames, setPlayer1Frames, setPlayer2Frames, setPlayer1Name, setPlayer2Name, setMatchDuration, setIsMatchSetUp, player1Name, player2Name, matchDuration, setFirstBreaker, firstBreaker }) => {

const [isAFoul, setIsAFoul] = useState(false)

// useEffect(() => {

//     const matchWin = ((parseInt(matchDuration) + 1 ) / 2)
//     console.log("player1frames", player1Frames)
//     console.log("player2frames", player2Frames)
//     if (player1Frames === matchWin || player2Frames === matchWin ){
//         if (player1Frames > player2Frames) {
//             alert( player1Name + " has won!")
//         } else if (player2Frames > player1Frames){
//             alert(player2Name + " has won!")
//         } else {
//             alert("It is a draw!")
//         }
//         handleEndMatch()
//     }

// }, [player1Frames, player2Frames])

const handleRed = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 1);
        setPlayer1Break(player1Break += 1)
    } else {
        setPlayer2Score(player2Score += 1);
        setPlayer2Break(player2Break += 1)
    }
}

const handleYellow = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 2);
        setPlayer1Break(player1Break += 2)
    } else {
        setPlayer2Score(player2Score += 2);
        setPlayer2Break(player2Break += 2)
    }
}

const handleGreen = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 3);
        setPlayer1Break(player1Break += 3)
    } else {
        setPlayer2Score(player2Score += 3);
        setPlayer2Break(player2Break += 3)
    }
}

const handleBrown = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 4);
        setPlayer1Break(player1Break += 4)
    } else {
        setPlayer2Score(player2Score += 4);
        setPlayer2Break(player2Break += 4)
    }
}

const handleBlue = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 5);
        setPlayer1Break(player1Break += 5)
    } else {
        setPlayer2Score(player2Score += 5);
        setPlayer2Break(player2Break += 5)
    }
}

const handlePink = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 6);
        setPlayer1Break(player1Break += 6)
    } else {
        setPlayer2Score(player2Score += 6);
        setPlayer2Break(player2Break += 6)
    }
}

const handleBlack = () => {
    if(activePlayer === 1) {
        setPlayer1Score(player1Score += 7);
        setPlayer1Break(player1Break += 7)
    } else {
        setPlayer2Score(player2Score += 7);
        setPlayer2Break(player2Break += 7)
    }
}

const handleEndFrame = () => {
    
    if (player1Score > player2Score){
        setPlayer1Frames(player1Frames += 1)
        setPlayer1Score(0)
        setPlayer2Score(0)
    } else if (player2Score > player1Score){
        setPlayer2Frames(player2Frames += 1)
        setPlayer1Score(0)
        setPlayer2Score(0)
    }
       const matchWin = ((parseInt(matchDuration) + 1 ) / 2)
       console.log(matchWin)
       console.log(player1Frames)
       console.log(player2Frames)
        if (player1Frames === matchWin || player2Frames === matchWin ){
        handleEndMatch();
        }
        handleSwitchPlayer()
        if(firstBreaker === player1Name){
            setFirstBreaker(player2Name)
            setActivePlayer(2)
        } else {
            setFirstBreaker(player1Name)
            setActivePlayer(1)
        }
}

const handleSwitchPlayer = () => {
    if(activePlayer === 1) {
        setActivePlayer(2)
        let highBreaks = player1Breaks
        highBreaks.push(player1Break)
        highBreaks.sort((a, b) => b - a)
        setPlayer1Breaks(highBreaks)
        setPlayer1Break(0) 
    } else {
        setActivePlayer(1)
        let highBreaks = player2Breaks
        highBreaks.push(player2Break)
        highBreaks.sort((a, b) => b - a)
        setPlayer2Breaks(highBreaks)
        setPlayer2Break(0)
    }
        // console.log(activePlayer)
}

const handleEndMatch = () => {
    if (player1Frames > player2Frames) {
        swal(<h1 className="alert"> {player1Name} has won the match <br/> {player1Frames} : {player2Frames}</h1>)
    } else if (player2Frames > player1Frames){
        swal(<h1 className="alert">{player2Name} has won the match <br/> {player2Frames} : {player1Frames}</h1>)
    } else {
        swal(<h1 className="alert">Match ends in a draw!</h1>)
    }
    setPlayer1Score(0)
    setPlayer2Score(0)
    setPlayer1Break(0)
    setPlayer2Break(0)
    setPlayer1Breaks([])
    setPlayer2Breaks([])
    setPlayer1Frames(0)
    setPlayer2Frames(0)
    setPlayer1Name("")
    setPlayer2Name("")
    setMatchDuration(1)
    setIsMatchSetUp(false)
    setFirstBreaker('random')
}

const handleFoul = () => {
    if(isAFoul === true) {
        setIsAFoul(false)
    } else {
        setIsAFoul(true)
    }
}

    return (
<>
        <div className="buttons-container">
            <div className="balls-button-container">
            {!isAFoul && <> 
            <button className="red-button" onClick={handleRed}>RED</button>
            <button className="yellow-button" onClick={handleYellow}>YELLOW</button>
            <button className="green-button" onClick={handleGreen}>GREEN</button>
            <button className="brown-button" onClick={handleBrown}>BROWN</button>
            <button className="blue-button" onClick={handleBlue}>BLUE</button>
            <button className="pink-button" onClick={handlePink}>PINK</button>
            <button className="black-button" onClick={handleBlack}>BLACK</button></>}
            <button className="foul-button" onClick={handleFoul}>FOUL</button>
            {isAFoul && 
            <FoulButtons 
            player1Score={player1Score}
            player2Score={player2Score}
            setPlayer1Score={setPlayer1Score}
            setPlayer2Score={setPlayer2Score}
            activePlayer={activePlayer}
            setIsAFoul={setIsAFoul}
             />}
             </div>
            
            <div className="games-button-container">
                    <button className="game-button" onClick={handleSwitchPlayer}>SWITCH PLAYER</button>
                    <button className="game-button" onClick={handleEndFrame}>END FRAME</button>
                    <button className="game-button" onClick={handleEndMatch}>END MATCH</button>
            </div>

        </div>
</>

    )
}

export default Buttons;