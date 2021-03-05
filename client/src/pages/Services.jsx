import React from "react";
import { AiOutlineDown } from "react-icons/ai";
// import RitaMwaikindaWebDeveloper from "../Images/Docs/RitaMwaikindaWebDeveloper.pdf";
import "./Services.css";

/*
this came from the top of home.jsx page
// import { Link, animateScroll as scroll } from "react-scroll";
*/

function Services() {
	return (
		<div>
			<div className='services'>
				<h1 className='title'>Why I can help you.</h1>
				<p className='summary'>
					<p id='summaryOne'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
						semper faucibus eros, quis imperdiet sapien. Nam sodales nec risus
						nec interdum. Proin lobortis, ex condimentum ultricies eleifend,
						nisl nunc sollicitudin odio, eget egestas est turpis et metus. In
						non ligula quis mauris rutrum porta.
					</p>
					<p className='summaryMe' id='summaryTwo'>
						{/* end of skills list */}
						{/* <div className='resume'> */}
						{/* <div className='alert'>
							Click here <AiOutlineArrowDown />
						</div> */}
						{/* <embed
							src={RitaMwaikindaWebDeveloper}
							alt='pdf of resume'
							className='resumepdf'></embed>
					</div> */}
					</p>
					<p className='summaryMe' id='lookAtResume'>
						Let's take a look at my resume?..
					</p>
				</p>
				<div className='skillsButton'>
					Skills <AiOutlineDown viewBox='0 -200 1024 1024' />
				</div>
			</div>
		</div>
	);
}

export default Services;
