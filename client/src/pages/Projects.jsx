import React from "react";
import "./Projects.css";

function Projects() {
	return (
		<div className="projectPage">
			<h1 className="title"> My Latest Work</h1>
			<div className="projectList">
				<img
					src="breakingbad.jpg"
					alt="snapshot of the breaking bad fan site and trivia game website"
					className="websitepreview"
				/>
				<img
					src="astrodate.jpg"
					alt="snapshot of the astrodate compatibility based dating application"
					className="websitepreview"
				/>
				<img
					src="bankingsite.jpg"
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
