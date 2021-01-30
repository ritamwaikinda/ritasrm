import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./Services.css";

function Services() {
	return (
		<div>
			<div className="services">
				<h1 className="title">Why I can help you.</h1>
				<p className="summary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper
					faucibus eros, quis imperdiet sapien. Nam sodales nec risus nec
					interdum. Proin lobortis, ex condimentum ultricies eleifend, nisl nunc
					sollicitudin odio, eget egestas est turpis et metus. In non ligula
					quis mauris rutrum porta.
				</p>
				<p className="summary">
					Duis consectetur massa sit amet nibh rhoncus, at pharetra ligula
					aliquet. Ut ac velit vestibulum, eleifend diam ut, malesuada nisi. Sed
					vel felis vitae diam luctus commodo. Nunc ipsum est, vulputate id orci
					ac, luctus consectetur sapien.
				</p>
				<div className="skillsButton">
					Skills <AiOutlineDown viewBox="0 -200 1024 1024" />
				</div>
			</div>
		</div>
	);
}

export default Services;
