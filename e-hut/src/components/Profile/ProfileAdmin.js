import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./ProfileCustomer.css";
import ImgData from "../../images/profile.jpg";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";

const ProfileAdmin = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("working");
		var data = JSON.parse(localStorage.getItem("user"));
		var cred = data.Phone + ":" + data.Password;
		await axios
			.put(
				"https://localhost:44390/api/Admins/" + adminId,
				{
					AdminId: adminId,
					Name: name,
					Phone: phone,
					Email: email,
					Address: address,
					Email: email,
					Image: image,
					Gender: gender,
					Password: password,
				},
				{
					headers: {
						Authorization: "Basic " + btoa(cred),
					},
				}
			)
			.then((res) => {
				console.log(res.status);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const [adminId, setAdminId] = useState("");
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [image, setImage] = useState("");
	const [gender, setGender] = useState("");
	const [password, setPassword] = useState("");

	React.useEffect(() => {
		var user = localStorage.getItem("user");
		if (user != null) {
			var data = JSON.parse(localStorage.getItem("user"));
			var cred = data.Phone + ":" + data.Password;
			axios
				.get("https://localhost:44390/api/Admins/" + data.UserId, {
					headers: {
						Authorization: "Basic " + btoa(cred),
					},
				})
				.then((response) => {
					setAdminId(response.data.AdminId);
					setPhone(response.data.Phone);
					setEmail(response.data.Email);
					setName(response.data.Name);
					setAddress(response.data.Address);
					setImage(response.data.Image);
					setGender(response.data.Gender);
					setPassword(response.data.Password);
					console.log(response);
				})
				.catch((err) => {
					console.log(data.UserId + "error occured");
					console.log(err);
				});
		} else {
			return <Redirect to="/login" />;
		}
	}, []);

	return (
		<React.Fragment>
			<div className="profile">
				<table>
					<tr>
						<td>
							<Image
								src={ImgData}
								alt="profile"
								className=" img-thumbnail image"
							></Image>
						</td>
						<td>
							<label htmlFor="">Admin Profile</label>
						</td>
					</tr>
				</table>
				<hr></hr>
				<Form onSubmit={handleSubmit}>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								name="name"
								value={name}
								onChange={(event) => setName(event.target.value)}
								//disabled={true}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={setEmail}
								//disabled={true}
							/>
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type="text"
								name="phone"
								value={phone}
								onChange={setPhone}
								//disabled={true}
							/>
						</Form.Group>

						<Form.Group as={Col} className="mb-3">
							<Form.Label>Select Image</Form.Label>
							<Form.Control type="file" name="image" />
						</Form.Group>
					</Row>
					<Form.Group className="mb-3" controlId="formGridAddress2">
						<Form.Label>Address</Form.Label>
						<Form.Control
							placeholder=""
							name="address"
							value={address}
							onChange={(event) => setAddress(event.target.value)}
							//disabled={true}
						/>
					</Form.Group>
					<div>
						<Button variant="primary" type="submit">
							Save
						</Button>

						<NavLink to={"/home"} className="btn btn-secondary m-1">
							Back
						</NavLink>
					</div>
				</Form>
			</div>
			<br />
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};

export default ProfileAdmin;
