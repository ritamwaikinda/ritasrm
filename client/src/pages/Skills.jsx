import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import {
	SiHtml5,
	SiCsswizardry,
	SiJavascript,
	SiReact,
	SiNodeDotJs,
} from "react-icons/si";
import ExpressJs from "../Images/ExpressJs.svg";
import "./Skills.css";

function Skills() {
	return (
		<div>
			<div className='skills'>
				<div className='qualifications'>
					<div className='skillsList'>
						<h2 className='skillsTitle'>
							Some skills I can apply to your projects...
						</h2>
						<ul className='list'>
							<li>
								<span className='skillIcon'>
									<SiHtml5 />
								</span>
								HTML
							</li>
							<li>
								<span className='skillIcon'>
									<SiCsswizardry />
								</span>
								CSS
							</li>
							<li>
								<span className='skillIcon'>
									<SiJavascript />
								</span>
								JAVASCRIPT
							</li>
							<li>
								<span className='skillIcon'>
									<SiReact />
								</span>
								REACT
							</li>
							<li>
								<img
									src={ExpressJs}
									alt='express logo'
									className='expressLogo'
								/>
								EXPRESS
							</li>
							<li>
								<span className='skillIcon'>
									<SiNodeDotJs />
								</span>
								NODE.JS
							</li>
							<li id='manyMore'>And many more...</li>
						</ul>
					</div>{" "}
				</div>
				{/* end of resume */}

				<a href='#snapProjects' className='projectsButton'>
					Projects <AiOutlineDown viewBox='0 -200 1024 1024' />
				</a>
			</div>
		</div>
	);
}

export default Skills;
