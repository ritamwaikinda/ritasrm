import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

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
			<form className="contactme" onSubmit={handleSubmit}>
				<input
					placeholder=" * Your Name"
					className="fields"
					id="nameinput"
					type="text"
					name="nameinput"
					required
				/>
				<input
					placeholder=" * Your Email"
					className="fields"
					id="emailinput"
					type="email"
					name="emailinput"
					required
				/>
				<textarea
					placeholder=" * Your Message"
					className="fields"
					id="messageinput"
					type="message"
					name="messageinput"
					required
				/>
				<button
					className="fields"
					id="submit"
					type="submit"
					disabled={serverState.submitting}>
					Send Mail
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
