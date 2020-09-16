import React from 'react';

// import './FoulButtons.css';

const FoulButtons = ({player1Score, player2Score, setPlayer1Score, setPlayer2Score, activePlayer, setIsAFoul }) => {

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
    {/* <div className="foul-buttons-container"> */}
        {/* <div className="foul-balls-button-container"> */}
            <button className="red-button" onClick={handleFoulRed}>FOUL RED</button>
            <button className="yellow-button" onClick={handleFoulYellow}>FOUL YELLOW</button>
            <button className="green-button" onClick={handleFoulGreen}>FOUL GREEN</button>
            <button className="brown-button" onClick={handleFoulBrown}>FOUL BROWN</button>
            <button className="blue-button" onClick={handleFoulBlue}>FOUL BLUE</button>
            <button className="pink-button" onClick={handleFoulPink}>FOUL PINK</button>
            <button className="black-button" onClick={handleFoulBlack}>FOUL BLACK</button>
        {/* </div> */}
    {/* </div> */}




    </>

)

}

export default FoulButtons;