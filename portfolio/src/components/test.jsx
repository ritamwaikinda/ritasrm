import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ArticleForm = ({ history }) => {
	const initialState = { title: "", text: "" };
	const [values, setValues] = useState(initialState);
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("/articles", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(values),
		})
			.then((response) => {
				if (response.ok) {
					alert("Article successfully created");
					return response.json().then((article) => {
						history.push(`/articles/${article._id}`);
					});
				}
			})
			.catch((error) => alert(error));
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Title of your article..."
						required={true}
						onChange={(e) => setValues({ ...values, title: e.target.value })}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Text</Form.Label>
					<Form.Control
						as="textarea"
						rows="5"
						placeholder="Text for your article..."
						required={true}
						onChange={(e) => setValues({ ...values, text: e.target.value })}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default ArticleForm;

import React, { useState } from "react";
import axios from "axios";

function MyForm() {
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
	const handleOnSubmit = (e) => {
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
			<h1>Contact Us</h1>
			<form onSubmit={handleOnSubmit}>
				<label htmlFor="email">Email:</label>
				<input id="email" type="email" name="email" required />
				<label htmlFor="message">Message:</label>
				<textarea id="message" name="message"></textarea>
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

export default MyForm;
