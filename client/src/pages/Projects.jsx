import React from "react";
import "./Projects.css";
import AstroDate from "../Images/AstroDate.png";
import BreakingBad from "../Images/BreakingBad.png";
import TriviaQuiz from "../Images/TriviaQuiz.png";
import Coming from "../Images/Coming.png";
import Soon from "../Images/Soon.jpg";
import Almost from "../Images/Almost.png";

function Projects() {
	return (
		<div className="projectPage">
			<h1 className="projectsTitle"> My Latest Work.</h1>
			<div className="projectList">
				<div className="projectDescription">
					Fansite with Interactive Trivia Game
					<span className="projectDate">November, 2020</span>
				</div>
				<img
					src={BreakingBad}
					alt="snapshot of the breaking bad fan site and trivia game website"
					className="websitepreview"
				/>

				<div className="projectDescription">
					Dating App & Algorithmic Compatibility Matching
					<span className="projectDate">December, 2020</span>
				</div>
				<img
					src={AstroDate}
					alt="snapshot of the astrodate compatibility based dating application"
					className="websitepreview"
					id="astro"
				/>

				<div className="projectDescription">
					API based Trivia Matching Game
					<span className="projectDate">November, 2020</span>
				</div>
				<img
					src={TriviaQuiz}
					alt="snapshot of the online banking website"
					className="websitepreview"
					id="quiz"
				/>

				<div className="projectDescription">
					Forum Application<span className="projectDate">January, 2021</span>
				</div>
				<img
					src={Coming}
					alt="snapshot of the commercial realestate website"
					className="websitepreview"
				/>

				<div className="projectDescription">
					Multi-Author & User Blog-Site for Web Developers
					<span className="projectDate">February, 2020</span>
				</div>
				<img
					src={Soon}
					alt="snapshot of the multi-user medium style blog site"
					className="websitepreview"
				/>

				<div className="projectDescription">
					Online Banking Application{" "}
					<span className="projectDate">February, 2020</span>
				</div>
				<img
					src={Almost}
					alt="snapshot of the online shopping website"
					className="websitepreview"
				/>
			</div>
		</div>
	);
}

export default Projects;
