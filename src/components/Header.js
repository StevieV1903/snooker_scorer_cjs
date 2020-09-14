import React from 'react';
import balls from '../assets/snookertriangle.png';
import './Header.css';

const Header = () => {
	return (
		<div className="header-container">
			<div className="header-banner">
				<div className="header-text">
					Snooker Scorer 
				</div>
				<div className="header-image">
				<img src={balls} alt="red snooker balls" />
				</div>
			</div>
			
		</div>
	);
};
export default Header;
