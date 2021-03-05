import React from "react";
import Contact from "./Contact";
import photoOne from "../Images/LeftImages/photoOne.jpg";
import photoTwo from "../Images/LeftImages/photoTwo.jpg";
import photoThree from "../Images/LeftImages/photoThree.jpg";
import "./Photo.css";

function Photo() {
	return (
		<div className='leftSide'>
			<div className='profilePhotos'>
				<div className='overlayContact'>
					<Contact />
				</div>
				<div id='leftPhotos'>
					<img
						src={photoOne}
						alt='headshot of rita mwaikinda'
						className='portraits'
						id='photoOne'
					/>
					<img
						src={photoTwo}
						alt='headshot of rita mwaikinda'
						className='portraits'
						id='photoTwo'
					/>
					<img
						src={photoThree}
						alt='headshot of rita mwaikinda'
						className='portraits'
						id='photoThree'
					/>
				</div>
			</div>
		</div>
	);
}

export default Photo;
