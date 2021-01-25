import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function ContactForm() {
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null,
	});
	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg },
		});
		if (ok) {
			form.reset();
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: "https://formspree.io/YOUR_FORM_ID",
			data: new FormData(form),
		})
			.then((r) => {
				handleServerResponse(true, "Thanks!", form);
			})
			.catch((r) => {
				handleServerResponse(false, r.response.data.error, form);
			});
	};

	return (
		<div>
			<h1>Contact Me.</h1>
			<form className="contactme" onSubmit={handleSubmit}>
				<input
					placeholder="* Your Name"
					id="name"
					type="text"
					name="name"
					required
				/>
				<input
					placeholder="* Your Email"
					id="email"
					type="email"
					name="email"
					required
				/>
				<textarea
					placeholder="* Your Message"
					id="message"
					type="message"
					name="message"
					required
				/>
				<button type="submit" disabled={serverState.submitting}>
					Submit
				</button>
				{serverState.status && (
					<p className={!serverState.status.ok ? "errorMsg" : ""}>
						{serverState.status.msg}
					</p>
				)}
			</form>
		</div>
	);
}

export default ContactForm;
