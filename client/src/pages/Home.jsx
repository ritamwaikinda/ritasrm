import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./Home.css";

function Home() {
	return (
		<div>
			<div className="intro">
				<h1 className="title">I'm Rita Mwaikinda,</h1>
				<p className="about">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					condimentum lacinia molestie. Phasellus vehicula ornare odio, blandit
					commodo nisl dapibus vel. Sed vel fermentum elit.
				</p>
				<div className="learnMore">
					Learn More <AiOutlineDown viewBox="0 -200 1024 1024" />
				</div>
			</div>
		</div>
	);
}

export default Home;
