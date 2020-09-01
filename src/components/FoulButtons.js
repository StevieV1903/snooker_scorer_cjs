import React from 'react';

const FoulButtons = ({player1Score, player2Score, setPlayer1Score, setPlayer2Score, activePlayer, setIsAFoul}) => {

    const handleFoulRed = () => {
        if(activePlayer === 1) {
            setPlayer2Score(player2Score += 4);
        }else {
            setPlayer1Score(player1Score += 4);
        }
        setIsAFoul(false)
    }
    
    const handleFoulYellow = () => {
        if(activePlayer === 1) {
            setPlayer2Score(player2Score += 4);
        }else {
            setPlayer1Score(player1Score += 4);
        }
        setIsAFoul(false)
    }
    
    const handleFoulGreen = () => {
        if(activePlayer === 1) {
            setPlayer2Score(player2Score += 4);
            
        }else {
            setPlayer1Score(player1Score += 4);
        }
        setIsAFoul(false)
    }
    
    const handleFoulBrown = () => {
        if(activePlayer === 1) {
            setPlayer2Score(player2Score += 4);
        }else {
            setPlayer1Score(player1Score += 4);
           
        }
        setIsAFoul(false)
    }
    
    const handleFoulBlue = () => {
        if(activePlayer === 1) {
            setPlayer2Score(player2Score += 5);
        }else {
            setPlayer1Score(player1Score += 5);
        }
        setIsAFoul(false)
    }
    
    const handleFoulPink = () => {
        if(activePlayer === 1) {
            setPlayer2Score(player2Score += 6);
        }else {
            setPlayer1Score(player1Score += 6);
        }
        setIsAFoul(false)
    }
    
    const handleFoulBlack = () => {
        if(activePlayer === 1) {
        setPlayer2Score(player2Score += 7);
    }else {
        setPlayer1Score(player1Score += 7);
        }
        setIsAFoul(false)
    }
    

return(

    <>
    <div id="button-container">
            <button id="red-button" onClick={handleFoulRed}>FOUL <br></br>RED</button>
            <button id="yellow-button" onClick={handleFoulYellow}>FOUL YELLOW</button>
            <button id="green-button" onClick={handleFoulGreen}>FOUL GREEN</button>
            <button id="brown-button" onClick={handleFoulBrown}>FOUL BROWN</button>
            <button id="blue-button" onClick={handleFoulBlue}>FOUL BLUE</button>
            <button id="pink-button" onClick={handleFoulPink}>FOUL PINK</button>
            <button id="black-button" onClick={handleFoulBlack}>FOUL BLACK</button>
            {/* <button id="foul-button" onClick={handleFoul}>RETURN</button> */}
            {/* <button id="foul-button" onClick={handleFoulCancel}>CANCEL</button> */}
        </div>




    </>

)

}

export default FoulButtons;