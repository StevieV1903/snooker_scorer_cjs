import React, { useEffect } from 'react';
import './LandingPage.css';

const Landing = ({ setPlayer1Name, setPlayer2Name, setMatchDuration, setIsMatchSetUp, player1Name, player2Name, setFirstBreaker, firstBreaker, setActivePlayer }) => {

	useEffect(()=> {
		window.scrollTo( 0, 0 )
	});
	
	const handleSubmit = (event) => {
		event.preventDefault();
		if(firstBreaker === "random"){
		const randomBreaker = Math.floor((Math.random() * 2) + 1);
				if(randomBreaker === 1){
					setFirstBreaker(player1Name)
					setActivePlayer(1)
				} else {
					setFirstBreaker(player2Name)
					setActivePlayer(2)
				}
		} else if  (firstBreaker === player1Name){
			setActivePlayer(1)
		} else if (firstBreaker === player2Name) {
			setActivePlayer(2)
		}
		
		setIsMatchSetUp(true);
	};

	return (
        <>
        <div className="form-container">
		<form className="game-form" onSubmit={handleSubmit}>
			<label>
				Player 1:
				<input
					type="text"
					onChange={(event) => setPlayer1Name(event.target.value)}
					placeholder="Enter Name"
					required
				/>
			</label>
			<br />

			<label>
				Player 2:
				<input
					type="text"
					onChange={(event) => setPlayer2Name(event.target.value)}
					placeholder="Enter Name"
					required
				/>
			</label>
			<br />

			<label>
				Number of frames:
				<select onChange={(event) => setMatchDuration(event.target.value)}>
					<option value={1}>1</option>
					<option value={3}>3</option>
					<option value={5}>5</option>
					<option value={7}>7</option>
					<option value={9}>9</option>
					<option value={11}>11</option>
					<option value={13}>13</option>
					<option value={15}>15</option>
					<option value={17}>17</option>
					<option value={19}>19</option>
					<option value={21}>21</option>
					<option value={23}>23</option>
					<option value={25}>25</option>
					<option value={27}>27</option>
					<option value={29}>29</option>
					<option value={31}>31</option>
					<option value={33}>33</option>
					<option value={35}>35</option>
				</select>
			</label>
			<br />

            <label>
                Player to break:
                <select onChange={(event) => setFirstBreaker(event.target.value)}>
                    <option value="random">Random</option>
                    <option value={player1Name}>{player1Name}</option>
                    <option value={player2Name}>{player2Name}</option>
                </select>
            </label>
			<br />
			<div className="submit-container">
			<button type="submit" value="Submit">START MATCH</button>
			</div>
			<br />
		</form>
        </div>
        </>
	);
};

export default Landing;
