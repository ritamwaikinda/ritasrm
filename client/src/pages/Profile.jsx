import React from "react";
import Progress from "../components/Progress";
import Home from "./Home";
// import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Photo from "./Photo";
import Contact from "./Contact";
import "./Profile.css";

function Profile() {
	return (
		<div className='appId'>
			<div className='leftOfApp'>
				<Photo />
			</div>
			<div className='rightOfApp'>
				<div>
					<Progress />
				</div>
				<div>
					<Home />
				</div>
				<div>{/* <Services /> */}</div>
				<div>
					<Skills />
				</div>
				<div>
					<Projects />
				</div>
				<div>
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default Profile;
