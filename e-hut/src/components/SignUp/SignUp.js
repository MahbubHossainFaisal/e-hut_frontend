import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [address, setAddress] = useState("");

	const SubmitHandler = async (e) => {};

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
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<br />
					<input
						className="form-control"
						type="text"
						placeholder="Enter Your Phone Number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
					<br />
					<input
						className="form-control"
						type="email"
						placeholder="Enter Your Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br />
					<input
						className="form-control"
						type="password"
						name="password"
						placeholder="Confirm your password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>{" "}
					<br />
					<input
						className="form-control"
						type="text"
						placeholder="Enter Your Address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
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
					<div className="row">
						<Link to="/signup/shop">
							<button
								type="button"
								className="btnSubmit  btn-primary btn-sm text-center my-2"
							>
								SignUp For Your Shop
							</button>
						</Link>
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
