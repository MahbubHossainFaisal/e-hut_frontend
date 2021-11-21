import React from "react";
import "./SignUp.css";

const SignUp = () => {
	return (
		<React.Fragment>
			<br />
			<br />
			<br />
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
						<label className="text-md-start">Select Gender</label>
						<br />
						<div className="row">
							<div className="col">
								<input
									className="form-check-input "
									type="radio"
									name="gender"
									value="Male"
									id=""
								/>
								<label htmlFor="">Male</label>
							</div>
							<div className="col">
								<input
									className="form-check-input"
									type="radio"
									name="gender"
									value="Female"
									id=""
								/>
								<label htmlFor="">Female</label>
							</div>
							<div className="col"></div>
							<div className="col"></div>
							<div className="col"></div>
						</div>
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
					<input
						className="form-control"
						type="text"
						placeholder="Enter Your Address"
					/>
					<br />
					<div className="row">
						<button
							type="button"
							className="btnSubmit  btn-primary btn-sm text-center"
						>
							SignUp
						</button>
					</div>
				</div>
			</form>
			<br />
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};

export default SignUp;
