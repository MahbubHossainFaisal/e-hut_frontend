import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./ProfileCustomer.css";
import ImgData from "../../images/profile.jpg";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Profile = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("working");
		await axios
			.put("https://localhost:44390/api/customers/" + customerId, {
				CustomerId: customerId,
				Name: name,
				Phone: phone,
				Email: email,
				Address: address,
				Email: email,
				Image: image,
				Gender: gender,
				Password: password,
				Occupation: occupation,
				NumberOfFamilyMemberAdult: numberOfFamilyMemberAdult,
				NumberOfFamilyMemberChild: numberOfFamilyMemberChild,
				NumberOfDeliveryGrocery: numberOfDeliveryGrocery,
				NumberOfDeliveryVegetable: numberOfDeliveryVegetable,
				DeliveryDay: deliveryDay,
				DeliveryTime: deliveryTime,
			})
			.then((res) => {
				console.log(res.status);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const [customerId, setCustomerId] = useState("");
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [image, setImage] = useState("");
	const [gender, setGender] = useState("");
	const [password, setPassword] = useState("");
	const [occupation, setOccupation] = useState("");
	const [numberOfFamilyMemberAdult, setNumberOfFamilyMemberAdult] =
		useState("");
	const [numberOfFamilyMemberChild, setNumberOfFamilyMemberChild] =
		useState("");
	const [numberOfDeliveryGrocery, setNumberOfDeliveryGrocery] = useState("");
	const [numberOfDeliveryVegetable, setNumberOfDeliveryVegetable] =
		useState("");
	const [deliveryDay, setDeliveryDay] = useState("");
	const [deliveryTime, setDeliveryTime] = useState("");

	React.useEffect(() => {
		var user = localStorage.getItem("user");
		if (user != null) {
			var data = JSON.parse(localStorage.getItem("user"));
			axios
				.get("https://localhost:44390/api/customers/" + data.UserId)
				.then((response) => {
					setCustomerId(response.data.CustomerId);
					setPhone(response.data.Phone);
					setEmail(response.data.Email);
					setName(response.data.Name);
					setAddress(response.data.Address);
					setImage(response.data.Image);
					setGender(response.data.Gender);
					setPassword(response.data.Password);
					setNumberOfFamilyMemberAdult(response.data.NumberOffamilyMemberAdult);
					setNumberOfFamilyMemberChild(response.data.NumberOffamilyMemberChild);
					setNumberOfDeliveryGrocery(response.data.NumberOfDeliveryGrocery);
					setNumberOfDeliveryVegetable(response.data.numberOfDeliveryVegetable);
					setDeliveryTime(response.data.DeliveryTime);
					setDeliveryDay(response.data.DeliveryDay);
					//console.log(customerId);
				})
				.catch((err) => {
					console.log(err);
				});

			//	console.log(data);
		} else {
			return <Redirect to="/login" />;
		}
	}, []);

	//console.log(user.Role);
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
							<label htmlFor="">User Profile</label>
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
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={setEmail}
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
						/>
					</Form.Group>
					<div>
						<Button variant="primary" type="submit">
							Save
						</Button>

						<NavLink to={"/user/profile/info"} className="btn btn-primary m-1">
							Additional Information
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

export default Profile;
