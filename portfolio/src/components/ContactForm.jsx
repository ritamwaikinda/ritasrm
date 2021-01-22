import React, { useState } from "react";
import "./styles.css";

function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	
		return (
			<form>
				<input
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder="* Your Name"
					type="text"
					name="name"
					required />
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="* Your Email"
					type="email"
					name="email"
					required />
				<textarea
					value={message}
					onChange={e => setMessage(e.target.value)}
					placeholder="* Your Message"
					type="message"
					name="message"
					required />
				<button type="submit">Submit</button>
			</form>
	  );
	}
}

export default ContactForm;
