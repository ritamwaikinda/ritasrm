import React from "react";

const ContactFormTwo = ({ formData, setFormData }) => {
	// const { formData, setFormData } = props;

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	console.log(formData);
	return (
		<div>
			<h1>Contact Form</h1>
			<form className="form">
				<input
					name="name"
					id="name"
					type="text"
					placeholder="* Your Name"
					onChange={handleChange}
				/>
				<input
					name="email"
					id="email"
					type="email"
					placeholder="* Your Email"
					onChange={handleChange}
				/>
				<textarea
					name="message"
					id="name"
					type="text"
					placeholder="* Your Message"
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};

export default ContactFormTwo;
