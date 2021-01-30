import React /*, { Component }*/ from "react";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
// import Main from "./components/Main";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";
import Contact from "./pages/Contact";
// import SocialLinks from "./components/SocialLinks";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div>
			<Home />
			<Services />
			<Skills />
			{/* <Navbar />
			<Home />
			<Main />
			<Projects />
			<Resume />
			<Contact />
			<SocialLinks />
			<Footer /> */}
			<Contact />
		</div>
	);
}

export default App;
