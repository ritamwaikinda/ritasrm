import React from 'react';
import photoOne from '../Images/photoOne.jpg';
import './Photo.css';

function Photo() {
	return (
		<div className="leftPhotos">
			<img src={photoOne} alt="headshot of rita mwaikinda" id="photoOne" />
			{/* <img src="#" alt="headshot of rita mwaikinda" id="photoTwo" /> */}
			{/* <img src="#" alt="headshot of rita mwaikinda" id="photoThree" /> */}
		</div>
	);
}

export default Photo;
