import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";
gsap.registerPlugin(ScrollTrigger);

function App() {
	useEffect(() => {
		// gsap.to("#intro img", {
		// 	opacity: 0,
		// 	scrollTrigger: {
		// 		trigger: "#intro",
		// 		start: "top top",
		// 		end: "bottom center",
		// 		scrub: 1,
		// 		markers: true,
		// 	},
		// });

		gsap.set("#project02", {
			yoyo: true,
			scrollTrigger: {
				trigger: "#project02",
				start: "top bottom-=10%",
				end: "bottom center-=10%",
				toggleClass: "animate",
				markers: true,
			},
		});

		// gsap.set("#project02", {
		// 	ScrollTrigger: {
		// 		trigger: "#project02",
		// 		start: "top top",
		// 		end: "bottom center",
		// 		toggleClass: "active",
		// 		markers: true,
		// 	},
		// });
	}, []);

	return (
		<>
			<div id="intro">
				<div className="content">
					<img src={require("./img/img_greensock-logo.png")} alt="" />
					<h1>The Basics</h1>
					<p>
						Short and sharp ScrollTrigger demos, teaching you the basics of
						GreenSock's ScrollTrigger API.
					</p>
				</div>
			</div>

			<div id="main" className="main-container">
				<div id="project01" className="project">
					<img src={require("./img/img_project01-icon.svg").default} alt="" />
					<h2>Project Title</h2>
					<p className="info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
						dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.
					</p>
				</div>

				<div className="bcg-parallax">
					<div className="bcg"></div>
					<div className="content-wrapper">
						<h1>Section With Parallax Effect</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
							dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
							Sed.
						</p>
					</div>
				</div>

				<div id="project02" className="project">
					<img src={require("./img/img_project02-icon.svg").default} alt="" />
					<h2>Project Title</h2>
					<p className="info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
						dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.
					</p>
				</div>

				<div id="project03" className="project">
					<img src={require("./img/img_project03-icon.svg").default} alt="" />
					<h2>Project Title</h2>
					<p className="info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
						dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.
					</p>
				</div>
			</div>

			<div className="footer-container">
				<footer className="wrapper">
					<h3>
						2020 &copy;{" "}
						<a href="https://ihatetomatoes.net" target="_blank">
							Ihatetomatoes.net
						</a>{" "}
						|{" "}
						<a href="https://twitter.com/ihatetomatoes" target="_blank">
							@ihatetomatoes
						</a>{" "}
						| Animate responsibly!
					</h3>
				</footer>
			</div>
		</>
	);
}

export default App;
