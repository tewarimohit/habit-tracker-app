import React from "react";
import landing from "../assets/landing-pic.svg";

const LandingPage = () => {
	return (
		<div>
			<div className="home-img">
				<img src={landing} alt="home-image" />
			</div>
		</div>
	);
};

export default LandingPage;
