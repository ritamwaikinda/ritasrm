import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineDown } from "react-icons/ai";
import "./Home.css";

function Home() {
	return (
		<div>
			<div className='intro'>
				<h1 className='title'>I'm Rita Mwaikinda,</h1>
				<p className='about'>
					<p id='aboutOne'>
						I'm a Software Developer, living in Miami, FL. I'm a graduate of the
						Wyncode Coding Academy, where I developed my ability to build Full
						Stack Web Applications, focusing primarily on the MERN Stack. I love
						building applications, and I'm passionate about learning new ways to
						make technology more serviceable, accessible, and personal for the
						every day person.
						{/* serviceable, and improve the quality of life for the every day
						person. */}
					</p>
					<p className='aboutMe' id='aboutTwo'>
						<span className='bouncy'>
							I love taking on challenges and and solving problems,
						</span>
						. As a kid, I used to buy extra-curricular homework booklets and
						spend my weekends gleefully finding answers to problems no-one
						really cared about.
						<p className='aboutMe' id='aboutThree'>
							As an adult, with a Bachelors in Social Sciences and a
							service-driven focus, I gleefully find answers to problems that
							can improve the lives of the people using my work.
						</p>
					</p>

					<p className='aboutMe' id='betterday'>
						So, tell me. How can I make your day better?
					</p>
				</p>
				<Link to='Skills'>
					<div className='learnMore'>
						Learn More <AiOutlineDown viewBox='0 -200 1024 1024' />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Home;
