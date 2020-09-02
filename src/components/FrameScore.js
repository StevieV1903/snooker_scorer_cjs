import React from 'react';
import './FrameScore.css'

const FrameScorer = ({player1Frames, player2Frames, matchDuration}) => {

return(

    <>
    <div className="frame-scorer-container">
        <div className="frame-scorer">
            <h3>Best of : {matchDuration}</h3>
            <h2>Frame Score</h2>
            <h1>{ player1Frames } : { player2Frames } </h1>
        </div>
    </div>



    </>


)

}

export default FrameScorer