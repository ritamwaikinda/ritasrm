import React, { useState } from "react";
import "./Contact.css";
import ContactForm from "../components/ContactForm";
import { FaGithub, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
	return (
		<div>
			<h1>Contact Me.</h1>
			<ul id="form">
				<li class="contact" id="phone">
					<FaPhoneAlt />
					(305) 934-2054
				</li>
				<li class="contact" id="email">
					<MdEmail />
					srmwaikinda@gmail.com
				</li>
				<li class="contact" id="linkedin">
					<FaLinkedin />
					http://www.linkedin.com/in/ritamwaikinda
				</li>
				<li class="contact" id="github">
					<FaGithub />
					http://github.com/ritamwaikinda
				</li>
			</ul>
			<ContactForm />
		</div>
	);
}

export default Contact;
