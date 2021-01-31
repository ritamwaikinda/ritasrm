import React from "react";

function Profile() {
	return (
		<div className="profileWindow">
			<img
				src="firstOne.jpg"
				alt="professional headshot"
				className="profilePicture"
				id="one"
			/>
			<img
				src="secondOne.jpg"
				alt="professional headshot"
				className="profilePicture"
				id="two"
			/>
			<img
				src="thirdOne.jpg"
				alt="professional headshot"
				className="profilePicture"
				id="three"
			/>
		</div>
	);
}

export default Profile;
