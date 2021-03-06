import React, { useState } from 'react';
import './Main.css';
import Player from './components/PlayerComponent.js';
import Buttons from './components/ButtonsComponent.js';
import FrameScorer from './components/FrameScore.js';

const Main = ({
	player1Name,
	player2Name,
	matchDuration,
	setPlayer1Name,
	setPlayer2Name,
	setMatchDuration,
	setIsMatchSetUp,
	firstBreaker,
	setFirstBreaker,
	activePlayer,
	setActivePlayer
}) => {
	const [ player1Score, setPlayer1Score ] = useState(0);
	const [ player2Score, setPlayer2Score ] = useState(0);
	const [ player1Break, setPlayer1Break ] = useState(0);
	const [ player2Break, setPlayer2Break ] = useState(0);
	const [ player1Breaks, setPlayer1Breaks ] = useState([]);
	const [ player2Breaks, setPlayer2Breaks ] = useState([]);
	const [ player1Frames, setPlayer1Frames ] = useState(0);
	const [ player2Frames, setPlayer2Frames ] = useState(0);

	return (
		<div>
			<div className="main-container">
				<div className="main-banner">
					<Player
						playerNumber={1}
						playerScore={player1Score}
						activePlayer={activePlayer}
						playerBreak={player1Break}
						playerBreaks={player1Breaks}
						playerName={player1Name}
					/>
					<FrameScorer
						player1Frames={player1Frames}
						player2Frames={player2Frames}
						matchDuration={matchDuration}
						firstBreaker={firstBreaker}
					/>
					<Player
						playerNumber={2}
						playerScore={player2Score}
						activePlayer={activePlayer}
						playerBreak={player2Break}
						playerBreaks={player2Breaks}
						playerName={player2Name}
					/>
				</div>
				<Buttons
					player1Score={player1Score}
					player2Score={player2Score}
					activePlayer={activePlayer}
					setActivePlayer={setActivePlayer}
					setPlayer1Score={setPlayer1Score}
					setPlayer2Score={setPlayer2Score}
					player1Break={player1Break}
					player2Break={player2Break}
					setPlayer1Break={setPlayer1Break}
					setPlayer2Break={setPlayer2Break}
					player1Breaks={player1Breaks}
					player2Breaks={player2Breaks}
					setPlayer1Breaks={setPlayer1Breaks}
					setPlayer2Breaks={setPlayer2Breaks}
					player1Frames={player1Frames}
					player2Frames={player2Frames}
					setPlayer1Frames={setPlayer1Frames}
					setPlayer2Frames={setPlayer2Frames}
					player1Name={player1Name}
					player2Name={player2Name}
					setIsMatchSetUp={setIsMatchSetUp}
					setMatchDuration={setMatchDuration}
					setPlayer1Name={setPlayer1Name}
					setPlayer2Name={setPlayer2Name}
					matchDuration={matchDuration}
					setFirstBreaker={setFirstBreaker}
					firstBreaker={firstBreaker}
				/>
			</div>
		</div>
	);
};

export default Main;
