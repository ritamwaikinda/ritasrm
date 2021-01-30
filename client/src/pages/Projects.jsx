import React from "react";
import "./Projects.css";
import AstroDate from "../Images/AstroDate.png";
import BreakingBad from "../Images/BreakingBad.png";
import TriviaQuiz from "../Images/TriviaQuiz.png";

function Projects() {
	return (
		<div className="projectPage">
			<h1 className="projectsTitle"> My Latest Work.</h1>
			<div className="projectList">
				<img
					src={BreakingBad}
					alt="snapshot of the breaking bad fan site and trivia game website"
					className="websitepreview"
				/>
				<img
					src={AstroDate}
					alt="snapshot of the astrodate compatibility based dating application"
					className="websitepreview"
				/>
				<img
					src={TriviaQuiz}
					alt="snapshot of the online banking website"
					className="websitepreview"
				/>
				<img
					src="realestatesite.jpg"
					alt="snapshot of the commercial realestate website"
					className="websitepreview"
				/>
				<img
					src="ecommerce.jpg"
					alt="snapshot of the online shopping website"
					className="websitepreview"
				/>
				<img
					src="bloggerindevelopment.jpg"
					alt="snapshot of the multi-user medium style blog site"
					className="websitepreview"
				/>
			</div>
		</div>
	);
}

export default Projects;
