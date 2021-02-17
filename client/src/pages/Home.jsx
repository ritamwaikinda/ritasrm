import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineDown } from "react-icons/ai";
import "./Home.css";

function Home() {
	return (
		<div>
			<div className='homeBox'>
				<div className='titleSlide'>
					<h1 className='title'>I'm Rita Mwaikinda,</h1>
				</div>
				<p className='about'>
					<div className='aboutOneSlide'>
						<p id='aboutOne'>
							I'm a Software Developer, living in Miami, FL. I am passionate
							about taking on challenges and solving problems. I am a graduate
							of Wyncode Academy, where I developed my skills to build Full
							Stack Web Applications. I have a Bachelors in Social Sciences. I
							gleefully find answers to problems that can improve the lives of
							everyday people by making technology more serviceable, and
							accessible.
						</p>
					</div>
					<div className='aboutTwoSlide'>
						<p className='aboutMe' id='betterday'>
							So, tell me. How can I make your day better?
						</p>
					</div>
				</p>

				<a href='#snapSkills' className='learnMore'>
					Learn More <AiOutlineDown viewBox='0 -200 1024 1024' />
				</a>
			</div>
		</div>
	);
}

export default Home;
