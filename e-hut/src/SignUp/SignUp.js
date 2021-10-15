import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends React.Component {
	render() {
		return (
			<React.Fragment>
				<form action="">
					<div className="form-group form-content">
						<input
							className="form-control"
							type="text"
							placeholder="Enter your Name"
						/>
						<br />
						<input
							className="form-control"
							type="text"
							placeholder="Enter Your Phone Number"
						/>
						<br />
						<input
							className="form-control"
							type="email"
							placeholder="Enter Your Email Address"
						/>
						<br />
						<div className="gender-radio ">
							<label className="font-weight-bold">Select Gender</label>
							<input
								className="form-check-input"
								type="radio"
								name="gender"
								value="Male"
								id=""
							/>
							<label htmlFor="">Male</label>
							<input
								className="form-check-input"
								type="radio"
								name="gender"
								value="Female"
								id=""
							/>
							<label htmlFor="">Female</label>
						</div>
						<br />
						<input
							className="form-control"
							type="password"
							name="password"
							placeholder="Enter your password"
						/>
						<br />
						<input
							className="form-control"
							type="password"
							name="password"
							placeholder="Confirm your password"
						/>{" "}
						<br />
						<div className="row">
							<button
								type="button"
								className="btnSubmit  d-flex justify-content-center text-center"
							>
								SignUp
							</button>
						</div>
					</div>
				</form>
			</React.Fragment>
		);
	}
}

export default SignUp;
