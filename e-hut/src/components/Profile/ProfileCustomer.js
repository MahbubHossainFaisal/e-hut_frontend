import React, { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./ProfileCustomer.css";
import ImgData from "../../images/profile.jpg";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Profile = () => {
	var [customer, setCustomer] = useState({
		CustomerId: "",
		Name: "",
		Address: "",
		Phone: "",
		Email: "",
		Gender: "",
		Image: "",
		Occupation: "",
		NumberOfFamilyMemberAdult: "",
		NumberOfFamilyMemberChild: "",
		NumberOfDeliveryGrocery: "",
		NumberOfDeliveryVegetable: "",
		DeliveryDay: "",
		DeliveryTime: "",
	});

	var {
		CustomerId,
		Name,
		Address,
		Phone,
		Email,
		Gender,
		Image,
		Occupation,
		NumberOfFamilyMemberAdult,
		NumberOfFamilyMemberChild,
		NumberOfDeliveryGrocery,
		NumberOfDeliveryVegetable,
		DeliveryDay,
		DeliveryTime,
	} = customer;

	var onInputChange = (e) => {
		setCustomer({ ...customer, [e.target.name]: [e.target.value] });
	};

	var user = localStorage.getItem("user");
	if (user != null) {
		var data = JSON.parse(localStorage.getItem("user"));
		axios
			.get("https://localhost:44390/api/customers/" + data.UserId)
			.then((response) => {
				Phone = "01324283";
				console.log(customer);
			})
			.catch((err) => {
				console.log(err);
			});

		//	console.log(data);
	} else {
		return <Redirect to="/login" />;
	}
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
				<Form>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								name=""
								onChange={(e) => onInputChange(e)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name=""
								onChange={(e) => onInputChange(e)}
							/>
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type="text"
								name=""
								onChange={(e) => onInputChange(e)}
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
							name=""
							onChange={(e) => onInputChange(e)}
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
