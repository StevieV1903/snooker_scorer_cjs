import React from 'react';
import './FrameScore.css'

const FrameScorer = ({player1Frames, player2Frames}) => {

return(

    <>
    <div className="frame-scrorer-container">
        <div className="frame-scorer">
            <h2>Frame Score</h2>
            <h1>{ player1Frames } : { player2Frames } </h1>
        </div>
    </div>



    </>


)

}

export default FrameScorer