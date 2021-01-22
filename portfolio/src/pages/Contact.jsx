import React, { useState } from "react";
import "./styles.css";
import Contact from "../components/ContactForm";

function Contact() {
	return (
		<div>
			<h1>Contact Me.</h1>

			<ul>
				<li class="contact" id="phone">
					(305) 934-2054
				</li>
				<li class="contact" id="email">
					srmwaikinda@gmail.com
				</li>
				<li class="contact" id="linkedin">
					http://www.linkedin.com/in/ritamwaikinda
				</li>
				<li class="contact" id="github">
					http://github.com/ritamwaikinda
				</li>
			</ul>

			<ContactForm />
		</div>
	);
}

export default Contact;
