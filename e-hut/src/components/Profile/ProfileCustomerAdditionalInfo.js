import React from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./ProfileCustomerAdditionalInfo.css";
import ImgData from "../../images/profile.jpg";
import { NavLink } from "react-router-dom";

const AdditionalInfo = () => {
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
				<Form>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Occupation</Form.Label>
							<Form.Control type="text" name="occupation" />
						</Form.Group>

						<Form.Group as={Col} controlId="email">
							<Form.Label>Family Member Adults</Form.Label>
							<Form.Control type="number" name="numberOfFamilyMemberAdult" />
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Family Member Child</Form.Label>
							<Form.Control type="number" name="numberOfFamilyMemberChild" />
						</Form.Group>
						<Form.Group as={Col} controlId="name">
							<Form.Label>Number Of Delivery in Month</Form.Label>
							<Form.Control type="number" name="numberOfFamilyMemberChild" />
						</Form.Group>
					</Row>

					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Groceries delivery in Month</Form.Label>
							<Form.Control type="number" name="numberOfFamilyMemberChild" />
						</Form.Group>
						<Form.Group as={Col} controlId="name">
							<Form.Label>Vegetables delivery in Month</Form.Label>
							<Form.Control type="number" name="numberOfFamilyMemberChild" />
						</Form.Group>
					</Row>

					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Preferable Time</Form.Label>
							<Form.Select defaultValue="Choose...">
								<option>Choose...</option>
								<option value="Morning">Morning</option>
								<option value="Afternoon">Afternoon</option>
								<option value="Evening">Evening</option>
							</Form.Select>
						</Form.Group>
					</Row>

					<Row className="mb-3">
						<Form.Group as={Col} controlId="name">
							<Form.Label>Preferable Days</Form.Label>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check label="Sat"></Form.Check>
							<Form.Check label="Sun"></Form.Check>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check label="Mon"></Form.Check>
							<Form.Check label="Tue"></Form.Check>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check label="Wed"></Form.Check>
							<Form.Check label="Thu"></Form.Check>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check label="Fri"></Form.Check>
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
