import React from "react";

const Home = () => {
	return <div>
		<div>Habit tracker
		</div>
		<div className="d-flex">
			<div className="drawer">
				<header>
					<h1 className="std-font-two hd-l-font prime-color">Library</h1>
				</header>
				<div className="drawer-elements">
					<h1 className="list-items std-font-one hd-s-font secondary-color">
						Documentation
					</h1>

					<hr className="divider-big" />

					<h1 className="list-items std-font-one hd-s-font secondary-color">
						Alert
					</h1>
					<h1 className="list-items std-font-one hd-s-font secondary-color">
						Avatars
					</h1>
					<h1 className="list-items std-font-one hd-s-font secondary-color">
						Badges
					</h1>


				</div>
			</div>
			<div className="d-flex flex-col width-100">
				<div className="d-flex-c-s ">
					<p>Mohit tewari</p>
					<div>Today</div>
				</div>
				<div className="d-flex d-flex-c-a ">
					<div className="card d-flex flex-col">
						<p>Completed</p>
						<p>1</p>
						<p>Total Count</p>
					</div>
					<div className="card d-flex flex-col">
						<p>In Progress</p>
						<p>2</p>
						<p>Total Count</p>
					</div>
					<div className="card d-flex flex-col">
						<p>Overdue</p>
						<p>3</p>
						<p>Total Count</p>
					</div>
					<div className="card d-flex flex-col">
						<p>Total</p>
						<p>6</p>
						<p>Total Count</p>
					</div>
				</div>
				<div className="d-flex-c-s ">
					<p>My Habits</p>
					<div>create habit</div>
				</div>
				<p>Active</p>
				<div className="d-flex  ">
					
				  <div className="card d-flex flex-col">
						<div className="d-flex-c-s">
							<div>Task#1</div>
							<div>tick</div>
						</div>
						<div className="d-flex">
                         <p>Label</p>
                          <p>Label</p>
                           <p>Label</p>
						</div>
						<p>0/2 times today</p>
					</div>
					<div className="card d-flex flex-col">
						<div className="d-flex-c-s">
							<div>Task#2</div>
							<div>tick</div>
						</div>
						<div className="d-flex">
                         <p>Label</p>
                          <p>Label</p>
                           <p>Label</p>
						</div>
						<p>0/2 times today</p>
					</div>
					
				</div>

				<p>Completed</p>
				<div className="d-flex  ">
					
				  <div className="card d-flex flex-col">
						<div className="d-flex-c-s">
							<div>Task#1</div>
							<div>tick</div>
						</div>
						<div className="d-flex">
                         <p>Label</p>
                          <p>Label</p>
                           <p>Label</p>
						</div>
						<p>0/2 times today</p>
					</div>
					<div className="card d-flex flex-col">
						<div className="d-flex-c-s">
							<div>Task#2</div>
							<div>tick</div>
						</div>
						<div className="d-flex">
                         <p>Label</p>
                          <p>Label</p>
                           <p>Label</p>
						</div>
						<p>0/2 times today</p>
					</div>
					
				</div>
			</div>

		</div>
	</div>;
};

export default Home;
