import React from 'react';
import './Profile.css';

function Profile() {
	let bgImageArray = [
			'lonely.jpg',
			'uluwatu.jpg',
			'carezza-lake.jpg',
			'batu-bolong-temple.jpg',
		],
		base = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-',
		secs = 4;
	bgImageArray.forEach(function (img) {
		new Image().src = base + img;
		// caches images, avoiding white flash between background replacements
	});

	function backgroundSequence() {
		window.clearTimeout();
		let k = 0;
		for (i = 0; i < bgImageArray.length; i++) {
			setTimeout(function () {
				document.documentElement.style.background =
					'url(' + base + bgImageArray[k] + ') no-repeat center center fixed';
				document.documentElement.style.backgroundSize = 'cover';
				if (k + 1 === bgImageArray.length) {
					setTimeout(function () {
						backgroundSequence();
					}, secs * 1000);
				} else {
					k++;
				}
			}, secs * 1000 * i);
		}
	}

	return (
		<div>
			<div className='profilePictures'>backgroundSequence();</div>
		</div>
	);
}

export default Profile;

// import React from 'react';
// import './Profile.css';

// function Profile() {
// 	return (
// 		<div className='profileWindow'>
// 			<div className='profilePhotos'>
// 				<img
// 					src='firstOne.jpg'
// 					alt='professional headshot'
// 					className='profilePicture'
// 					id='one'
// 				/>
// 				<img
// 					src='secondOne.jpg'
// 					alt='professional headshot'
// 					className='profilePicture'
// 					id='two'
// 				/>
// 				<img
// 					src='thirdOne.jpg'
// 					alt='professional headshot'
// 					className='profilePicture'
// 					id='three'
// 				/>
// 			</div>
// 		</div>
// 	);
// }
