import React from "react";
import "../frontend/styles/LandingPage.css";
import landing from "../assets/landing-pic.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div>
			<div className="">
				<h1 className="hd-l-font text-center margin-2">Habit Tracker</h1>
				<div className="landing-img d-flex  ">
					<div className="width-50">
						<p className="ml-2 dark-text mb1 hd-s-font">Meet Your Modern</p>
						<p className="ml-2 mb1 habit-light-text hd-s-font">
							Habit Tracker app
						</p>
						<p className="ml-2 mb2 dark-text para-s-font">
							Manage your daily task and workflow in a modern way and boost your
							efficiency without any efforts.
						</p>
						<Link
							to="/login"
							class="width-50 floating-btn hd-s-font floating-btn1 landing-btn ml-2"
						>
							Join Now
						</Link>
					</div>
					<img src={landing} alt="landing-image" />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
