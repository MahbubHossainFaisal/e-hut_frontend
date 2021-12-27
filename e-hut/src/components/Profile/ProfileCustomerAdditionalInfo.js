import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./ProfileCustomerAdditionalInfo.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgData from "../../images/profile.jpg";
import { Redirect } from "react-router-dom";

var isMorning = false;
var isAfternoon = false;
var isEvening = false;
let sat, sun, mon, wed, tue, thu, fri;

const AdditionalInfo = () => {
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

	const setDeliveryDayFromCheck = (event) => {
		setDeliveryDay(deliveryDay + "," + event.target.value);
		console.log("Data:" + deliveryDay);
	};

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
					setNumberOfFamilyMemberAdult(response.data.NumberOfFamilyMemberAdult);
					setNumberOfFamilyMemberChild(response.data.NumberOfFamilyMemberChild);
					setNumberOfDeliveryGrocery(response.data.NumberOfDeliveryGrocery);
					setNumberOfDeliveryVegetable(
						response.data.NumberOfDeliveryVegitables
					);
					setDeliveryTime(response.data.DeliveryTime);
					setDeliveryDay(response.data.DeliveryDay);
					setOccupation(response.data.Occupation);
				})
				.catch((err) => {
					console.log(err);
				});

			//	console.log(data);
		} else {
			return <Redirect to="/login" />;
		}
	}, []);
	{
		if (deliveryTime === "Morning") {
			isMorning = true;
		}
		if (deliveryTime === "Afternoon") {
			isAfternoon = true;
		}
		if (deliveryTime === "Evening") {
			isEvening = true;
		}

		useEffect(() => {
			sat = deliveryDay.includes("Saturday");
			sun = deliveryDay.includes("Sunday");
			mon = deliveryDay.includes("Monday");
			wed = deliveryDay.includes("Wednesday");
			tue = deliveryDay.includes("Tuesday");
			thu = deliveryDay.includes("Thursday");
			fri = deliveryDay.includes("Friday");
			//console.log(deliveryDay);
			//console.log(deliveryDayFromCheck);
		}, [deliveryDay]);
	}
	return (
		<React.Fragment>
			<div className="additionalInfo">
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
				<hr />
				<Form onSubmit={handleSubmit}>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Occupation</Form.Label>
							<Form.Control
								type="text"
								name="occupation"
								value={occupation}
								onChange={(event) => setOccupation(event.target.value)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="email">
							<Form.Label>Family Member Adults</Form.Label>
							<Form.Control
								type="number"
								name="numberOfFamilyMemberAdult"
								value={numberOfFamilyMemberAdult}
								onChange={(event) =>
									setNumberOfFamilyMemberAdult(event.target.value)
								}
							/>
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Family Member Child</Form.Label>
							<Form.Control
								type="number"
								name="numberOfFamilyMemberChild"
								value={numberOfFamilyMemberChild}
								onChange={(event) =>
									setNumberOfFamilyMemberChild(event.target.value)
								}
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="name">
							<Form.Label>Number Of Delivery Grocery</Form.Label>
							<Form.Control
								type="number"
								name="numberOfDelivery"
								value={numberOfDeliveryGrocery}
								onChange={(event) =>
									setNumberOfDeliveryGrocery(event.target.value)
								}
							/>
						</Form.Group>
					</Row>

					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Number Of Delivery Vegitables</Form.Label>
							<Form.Control
								type="number"
								name="numberOfDeliveryVegitables"
								value={numberOfDeliveryVegetable}
								onChange={(event) =>
									setNumberOfDeliveryVegetable(event.target.value)
								}
							/>
						</Form.Group>
					</Row>

					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Preferable Time</Form.Label>
							<Form.Select
								Value={deliveryTime}
								onChange={(event) => setDeliveryTime(event.target.value)}
							>
								<option value="Morning" selected={isMorning}>
									Morning
								</option>
								<option value="Afternoon" selected={isAfternoon}>
									Afternoon
								</option>
								<option value="Evening" selected={isEvening}>
									Evening
								</option>
							</Form.Select>
						</Form.Group>
					</Row>

					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Preferable Days</Form.Label>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check
								label="Satarday"
								value="Satarday"
								checked={sat}
								onChange={setDeliveryDayFromCheck}
							></Form.Check>
							<Form.Check
								label="Sunday"
								value="Sunday"
								checked={sun}
								onChange={setDeliveryDayFromCheck}
							></Form.Check>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check
								label="Monday"
								value="Monday"
								checked={mon}
								onChange={setDeliveryDayFromCheck}
							></Form.Check>
							<Form.Check
								label="Tuesday"
								value="Tuesday"
								checked={tue}
								onChange={setDeliveryDayFromCheck}
							></Form.Check>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check
								label="Wednesday"
								value="Wednesday"
								checked={wed}
								onChange={setDeliveryDayFromCheck}
							></Form.Check>
							<Form.Check
								label="Thursday"
								value="Thursday"
								checked={thu}
								onChange={setDeliveryDayFromCheck}
							></Form.Check>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check
								label="Friday"
								value="Friday"
								checked={fri}
								onChange={setDeliveryDayFromCheck}
							></Form.Check>
						</Form.Group>
					</Row>

					<div>
						<Button variant="primary" type="submit">
							Save
						</Button>

						<NavLink to={"/user/profile"} className="btn btn-primary m-1">
							Back
						</NavLink>
					</div>
				</Form>
			</div>
		</React.Fragment>
	);
};

export default AdditionalInfo;
