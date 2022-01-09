import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "../store/loginStatus-context";
const Login = () => {
	const loginCtx = useContext(LoginContext);
	const history = useHistory();
	let uname, pass;
	const setusername = (event) => {
		uname = event.target.value;
	};

	const setPassword = (event) => {
		pass = event.target.value;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
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
				console.log(err);
			});
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
								<div class="form-group">
									<label for="username" class="text-info">
										Username:
									</label>
									<br />
									<input
										type="text"
										name="username"
										id="username"
										class="form-control"
										onChange={setusername}
									/>
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
