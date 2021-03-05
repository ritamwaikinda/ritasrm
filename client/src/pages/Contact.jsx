import React from "react";
import "./Contact.css";
import ContactForm from "../components/ContactForm";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
	return (
		<div className='contactPage'>
			<h1>Contact Me.</h1>
			<br></br>
			<ul id='form'>
				<li className='contact' id='phone'>
					<FaPhoneAlt viewBox='0 0 512 512' />
					<span className='margin'></span>
					(305) 934-2054
				</li>
				<li className='contact' id='email'>
					<a
						href='mailto:srmwaikinda@gmail.com'
						target='_blank'
						rel='noreferrer'
						id='linkedLogo'>
						<MdEmail />
						<span className='margin'></span>
						srmwaikinda@gmail.com
					</a>
				</li>
				<li className='contact' id='linkedin'>
					<a
						href='https://www.linkedin.com/in/ritamwaikinda'
						target='_blank'
						rel='noreferrer'
						id='linkedLogo'>
						<FaLinkedin className='linkedinlogo' />
						<span className='margin'></span>
						http://www.linkedin.com/in/ritamwaikinda
					</a>
				</li>
				<li className='contact' id='github'>
					<a
						href='https://github.com/ritamwaikinda'
						target='_blank'
						rel='noreferrer'
						id='gitLogo'>
						<FaGithub className='githublogo' />
						<span className='margin'></span>
						http://github.com/ritamwaikinda
					</a>
				</li>
			</ul>
			<br></br>
			<br></br>
			<ContactForm />
			<br></br>

			<a href='#snapHome' id='topLink'>
				top :)
			</a>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
}

export default Contact;
