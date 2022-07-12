import React from "react";
import "../frontend/styles/LandingPage.css";
import landing from "../assets/landing-pic.svg";

const LandingPage = () => {
	return (
		<div>
			<div className="">
				<h1 className="hd-l-font text-center margin-2">Habit Tracker</h1>
				<div className="landing-img d-flex  ">
					<div className="width-50">
						<p className="ml-2 hd-s-font">Meet Your Modern</p>
						<p className="ml-2 dark-text hd-s-font">Habit Tracker app</p>
					</div>
					<img src={landing} alt="landing-image" />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
