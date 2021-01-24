import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

		return (
			<form onSubmit={handleOnSubmit}>
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
				<button type="submit" disabled={serverState.submitting}>Submit</button>
				{serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
				 )}
			</form>
	  );
	}
}

export default ContactForm;
