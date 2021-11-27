import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./deliverymenSignUp.module.css";
import axios from "axios";

const DeliverymenSignUp = () => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const [nid,setNid] = useState()

	const submitHandler = async (e) => {
		e.preventDefault();
		// console.log(name,manager,address,phone,email,bankInfoId,password)

		await axios
			.post("https://localhost:44390/api/shops", {
				Name: name,
				Address: address,
				Phone: phone,
				Email: email,
				Nid: nid,
				Status: false,
				Rating: 0,
				totalSold: 0.0,
				totalRecievedPayment: 0.0,
				password: password,
			})
			.then((res) => {
				console.log(res.data.Status);
				// if (res.data.status === 204) {

				// 	alert("Shops Added");
				// }
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<React.Fragment>
			<br />
			<br />
			<form className={`${classes.form} bg-white`} onSubmit={submitHandler}>
				<h3>Sign Up As A Delivery Men</h3>

				<Row>
					<Col md={6}>
						<div className="form-group">
							<label>Name</label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="form-control"
								placeholder="Enter your name"
							/>
						</div>
					</Col>
					<Col md={6}>
						<div className="form-group">
							<label>Your NID</label>
							<input
								type="text"
								value={nid}
								onChange={(e) => setNid(e.target.value)}
								className="form-control"
								placeholder="Enter your NID"
							/>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								className="form-control"
								placeholder="Enter address"
							/>
						</div>
					</Col>
					<Col md={6}>
						<div className="form-group">
							<label>Phone No</label>
							<input
								type="number"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="form-control"
								placeholder="Enter phone no"
							/>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="form-control"
								placeholder="Enter email"
							/>
						</div>
					</Col>
					<Col md={6}>
						<div className="form-group">
							<label>Gender</label>
						    <select
							name="BrandId"
							className="form-select form-select-lg mb-3 "
							onChange={(e) => setGender(e)}
						    >
							<option className="" value="Male">
								Male
							</option>
							<option className="" value="Female">
								Female
							</option>
						</select>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="form-control"
								placeholder="Enter password"
							/>
						</div>
					</Col>
                    <Col md={6}>
						<div className="form-group">
							<label>Your Image</label>
							<input
								type="text"
								value={image}
								onChange={(e) => setImage(e.target.value)}
								className="form-control"
								placeholder="Enter your image"
							/>
						</div>
					</Col>
				</Row>

				<button type="submit" className="btn btn-primary btn-block my-2">
					Sign Up
				</button>
				<p className="my-auto">
					Already registered <a href="/login">sign in?</a>
				</p>
			</form>
			<br />
			<br />
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};

export default DeliverymenSignUp;
