import React, { useState } from 'react';
import './App.css';
import Main from './Main.js';
import Landing from './components/LandingPage.js';
import Header from './components/Header.js';

function App() {
	const [ player1Name, setPlayer1Name ] = useState('');
	const [ player2Name, setPlayer2Name ] = useState('');
	const [ matchDuration, setMatchDuration ] = useState(1);
	const [ isMatchSetUp, setIsMatchSetUp ] = useState(false);

	return (
		<div className="App">
			<Header />
			{!isMatchSetUp && (
				<Landing
					setPlayer1Name={setPlayer1Name}
					setPlayer2Name={setPlayer2Name}
					setMatchDuration={setMatchDuration}
					setIsMatchSetUp={setIsMatchSetUp}
				/>
			)}
			{isMatchSetUp && (
				<Main
					player1Name={player1Name}
					player2Name={player2Name}
					matchDuration={matchDuration}
					setPlayer1Name={setPlayer1Name}
					setPlayer2Name={setPlayer2Name}
					setMatchDuration={setMatchDuration}
					setIsMatchSetUp={setIsMatchSetUp}
				/>
			)}
		</div>
	);
}

export default App;
