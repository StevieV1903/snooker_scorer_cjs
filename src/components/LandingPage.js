import React from 'react';
import './LandingPage.css';

const Landing = ({ setPlayer1Name, setPlayer2Name, setMatchDuration, setIsMatchSetUp, player1Name, player2Name, setFirstBreaker }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		setIsMatchSetUp(true);
	};

	return (
        <>
        <div className="form-container">
		<form onSubmit={handleSubmit}>
			<label>
				Player 1 Name:
				<input
					type="text"
					// value={player1Name}
					onChange={(event) => setPlayer1Name(event.target.value)}
					placeholder="Enter Name"
					required
				/>
			</label><br/>

			<label>
				Player 2 Name:
				<input
					type="text"
					// value={player2Name}
					onChange={(event) => setPlayer2Name(event.target.value)}
					placeholder="Enter Name"
					required
				/>
			</label><br/>

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
				</select><br/>
			</label>
            <label>
                Select player to break:
                <select onChange={(event) => setFirstBreaker(event.target.value)}>
                    <option value="random">Random</option>
                    <option value={player1Name}>{player1Name}</option>
                    <option value={player2Name}>{player2Name}</option>
                </select>
            </label>

			<input type="submit" value="Submit" />
		</form>
        </div>
        </>
	);
};

export default Landing;
