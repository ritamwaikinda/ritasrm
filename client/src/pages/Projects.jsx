import React from "react";
import "./Projects.css";
import AstroDate from "../Images/AstroDate.png";
import BreakingBad from "../Images/BreakingBad.png";
import TriviaQuiz from "../Images/TriviaQuiz.png";
import Coming from "../Images/Coming.png";
import Soon from "../Images/Soon.jpg";
import Almost from "../Images/Almost.png";
import { AiOutlineDown } from "react-icons/ai";

function Projects() {
	return (
		<div className='projectPage'>
			<h1 className='projectsTitle'> My Latest Work.</h1>

			<div className='projectList'>
				<div className='projectDescription'>
					Fansite with Interactive Trivia Game
				</div>
				<a
					href='https://felina.herokuapp.com/'
					target='_blank'
					rel='noreferrer'>
					<img
						src={BreakingBad}
						alt='snapshot of the breaking bad fan site and trivia game website'
						className='websitepreview'
					/>
				</a>

				<div className='projectDescription'>
					Dating App & Algorithmic Compatibility Matching
				</div>
				<a
					href='https://astrodate.herokuapp.com/'
					target='_blank'
					rel='noreferrer'>
					<img
						src={AstroDate}
						alt='snapshot of the astrodate compatibility based dating application'
						className='websitepreview'
						id='astro'
					/>
				</a>

				<div className='projectDescription'>API based Trivia Matching Game</div>
				<a
					href='https://felina.herokuapp.com/game-start'
					target='_blank'
					rel='noreferrer'>
					<img
						src={TriviaQuiz}
						alt='snapshot of the online banking website'
						className='websitepreview'
						id='quiz'
					/>
				</a>

				<div className='projectDescription'>Forum Application</div>
				<img
					src={Coming}
					alt='snapshot of the commercial realestate website'
					className='websitepreview'
				/>

				<div className='projectDescription'>
					Multi-Author & User Blog-Site for Web Developers
				</div>
				<img
					src={Soon}
					alt='snapshot of the multi-user medium style blog site'
					className='websitepreview'
				/>

				<div className='projectDescription'>Online Banking Application </div>
				<img
					src={Almost}
					alt='snapshot of the online shopping website'
					className='websitepreview'
				/>
			</div>

			<a href='#snapContact' className='contactMeButton'>
				Leave a Message <AiOutlineDown viewBox='0 -200 1024 1024' />
				<br></br>
				<span className='cutesy'>( Or just say hi... )</span>
			</a>
		</div>
	);
}

export default Projects;
