import React from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./ProfileCustomer.css";
import ImgData from "../../images/profile.jpg";
import { NavLink } from "react-router-dom";

const Profile = () => {
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
							<Form.Control type="text" placeholder="Name" name="name" />
						</Form.Group>

						<Form.Group as={Col} controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="email" name="email" />
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Phone</Form.Label>
							<Form.Control type="text" placeholder="Name" name="phone" />
						</Form.Group>

						<Form.Group as={Col} className="mb-3">
							<Form.Label>Select Image</Form.Label>
							<Form.Control type="file" />
						</Form.Group>
					</Row>
					<Form.Group className="mb-3" controlId="formGridAddress2">
						<Form.Label>Address</Form.Label>
						<Form.Control placeholder="Apartment, studio, or floor" />
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
		</React.Fragment>
	);
};

export default Profile;
