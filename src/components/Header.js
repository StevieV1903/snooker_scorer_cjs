import React from 'react';
import balls from '../assets/snookertriangle.png';
import './Header.css';

const Header = () => {
	return (
		<div className="Main-title">
			<h1>
				Snooker Scorer <img src={balls} alt="red snooker balls" />
			</h1>
		</div>
	);
};
export default Header;
