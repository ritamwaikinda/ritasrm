import React from "react";
import { AiOutlineArrowDown, AiOutlineDown } from "react-icons/ai";
import {
	SiHtml5,
	SiCsswizardry,
	SiJavascript,
	SiReact,
	SiNodeDotJs,
} from "react-icons/si";
import ExpressIcon from "../Images/ExpressIcon.jsx";
import RitaMwaikindaWebDeveloper from "../Images/Docs/RitaMwaikindaWebDeveloper.pdf";
import "./Skills.css";

function Skills() {
	return (
		<div>
			<div className="skills">
				<div className="qualifications">
					<div className="skillsList">
						<h2 className="title">What I can do for you.</h2>
						<ul className="list">
							<li>
								<SiHtml5 /> HTML
							</li>
							<li>
								<SiCsswizardry /> CSS
							</li>
							<li>
								<SiJavascript /> JAVASCRIPT
							</li>
							<li>
								<SiReact /> REACT
							</li>
							<li>
								<ExpressIcon /> EXPRESS
							</li>
							<li>
								<SiNodeDotJs /> NODE.JS
							</li>
						</ul>
					</div>
					<div className="resume">
						<div className="alert">
							Click here <AiOutlineArrowDown />
						</div>
						<embed
							src={RitaMwaikindaWebDeveloper}
							alt="pdf of resume"
							className="resumepdf"></embed>
					</div>
				</div>
				<div className="projectsButton">
					Projects <AiOutlineDown viewBox="0 -200 1024 1024" />
				</div>
			</div>
		</div>
	);
}

export default Skills;
