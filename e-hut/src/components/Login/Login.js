import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "../store/loginStatus-context";

const Login = () => {
	const loginCtx = useContext(LoginContext);
	const [formErrors, setFormErrors] = useState({});
	const [credMsg, setCredMsg] = useState("");

	const history = useHistory();
	const [uname, setUname] = useState("");
	const [pass, setPass] = useState("");
	const [isSubmit, setIsSubmit] = useState(false);
	const setusername = (event) => {
		setUname(event.target.value);
	};

	const setPassword = (event) => {
		setPass(event.target.value);
	};

	const Validate = () => {
		setCredMsg("");
		let error = {};
		if (uname === "") {
			error.UserName = "Phone number must provide.";
		}
		if (pass === "") {
			error.Password = "Password must provide";
		}
		return error;
	};

	useEffect(() => {
		//console.log(Object.keys(formErrors).length);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			axios
				.post("https://localhost:44390/api/Credentials/Login", {
					Phone: uname,
					Password: pass,
				})
				.then((res) => {
					if (res.status === 200) {
						if (res.data !== null) {
							if (res.data.Role == "Customer") {
								localStorage.setItem("user", JSON.stringify(res.data));
								loginCtx.changeLogin(true);
								history.push({
									pathname: "/home",
									state: true,
								});
							} else if (res.data.Role == "Shop") {
								localStorage.setItem("user", JSON.stringify(res.data));
								loginCtx.changeLogin(true);
								history.push({
									pathname: "/shop/dashboard",
									state: true,
								});
							} else if (res.data.Role == "Admin") {
								localStorage.setItem("user", JSON.stringify(res.data));
								loginCtx.changeLogin(true);
								history.push({
									pathname: "/admin/dashboard",
									state: true,
								});
							}
						}
					}
				})
				.catch((err) => {
					setCredMsg("Invalid Phone Number or Password!");
					console.log(err);
				});
		}
	}, [formErrors]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(Validate());
		setIsSubmit(true);
	};

	return (
		<div id="login">
			<br />
			<br />
			<br />
			<div class="container">
				<div
					id="login-row"
					class="row justify-content-center align-items-center"
				>
					<div id="login-column" class="col-md-6">
						<div id="login-box" class="col-md-12">
							<form id="login-form" class="form" onSubmit={handleSubmit}>
								<h3 class="text-center text-info">Login</h3>
								<p className="error">{credMsg}</p>

								<div class="form-group">
									<label for="username" class="text-info">
										Phone:
									</label>
									<br />
									<input
										type="text"
										name="username"
										id="username"
										class="form-control"
										onChange={setusername}
									/>
									<p className="error">{formErrors.UserName}</p>
								</div>
								<div class="form-group">
									<label for="password" class="text-info">
										Password:
									</label>
									<br />
									<input
										type="password"
										name="password"
										id="password"
										class="form-control"
										onChange={setPassword}
									/>
									<p className="error">{formErrors.Password}</p>
								</div>
								<div class="form-group">
									<label for="remember-me" class="text-info">
										<span>Remember me</span> 
										<span>
											<input
												id="remember-me"
												name="remember-me"
												type="checkbox"
											/>
										</span>
									</label>
									<br />
									<input
										type="submit"
										name="submit"
										class="btn btn-info btn-md"
										value="Submit"
									/>
								</div>
								<div id="register-link" class="text-right">
									<a href="#" class="text-info">
										Register here
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
