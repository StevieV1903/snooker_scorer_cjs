import React from 'react';

const FrameScorer = ({player1Frames, player2Frames}) => {

return(

    <>
    <div className="frame-scrorer-container">
    <h1>Frame Score: </h1>
    <h1>{player1Frames} : {player2Frames} </h1>


    </div>



    </>


)

}

export default FrameScorer