import React from "react";
import "./Contact.css";
import ContactForm from "../components/ContactForm";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
	return (
		<div>
			<h1>Contact Me.</h1>
			<br></br>
			<ul id="form">
				<li className="contact" id="phone">
					<FaPhoneAlt viewBox="0 0 512 512" />
					<span className="margin"></span>
					(305) 934-2054
				</li>
				<li className="contact" id="email">
					<MdEmail />
					<span className="margin"></span>
					srmwaikinda@gmail.com
				</li>
				<li className="contact" id="linkedin">
					<a
						href="https://www.linkedin.com/in/ritamwaikinda"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin className="linkedinlogo" />
						<span className="margin"></span>
						http://www.linkedin.com/in/ritamwaikinda
					</a>
				</li>
				<li className="contact" id="github">
					<a
						href="https://github.com/ritamwaikinda"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub className="githublogo" />
						<span className="margin"></span>
						http://github.com/ritamwaikinda
					</a>
				</li>
			</ul>
			<br></br>
			<br></br>
			<ContactForm />
		</div>
	);
}

export default Contact;
