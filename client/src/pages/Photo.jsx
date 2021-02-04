import React from 'react';
import photoOne from '../Images/LeftImages/photoOne.jpg';
import photoTwo from '../Images/LeftImages/photoTwo.jpg';
import photoThree from '../Images/LeftImages/photoThree.jpg';
import './Photo.css';

function Photo() {
	return (
		<div className='leftPhotos'>
			<img src={photoOne} alt='headshot of rita mwaikinda' id='photoOne' />
			<img src={photoTwo} alt='headshot of rita mwaikinda' id='photoTwo' />
			<img src={photoThree} alt='headshot of rita mwaikinda' id='photoThree' />
		</div>
	);
}

export default Photo;
