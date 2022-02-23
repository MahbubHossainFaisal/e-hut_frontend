import React, { useState, useEffect } from "react";
import axios from "axios";
import "./customerList.css";
import Dashboard from "../dashboard";

const CustomerList = () => {
	var data = JSON.parse(localStorage.getItem("user"));
	var cred = data.Phone + ":" + data.Password;
	const [customers, setCustomers] = useState([]);
	//console.log(admin);
	useEffect(() => {
		axios
			.get("https://localhost:44390/api/Customers", {
				headers: {
					Authorization: "Basic " + btoa(cred),
				},
			})
			.then((response) => {
				setCustomers(response.data);
				//console.log(response.data);
				//console.log(admin);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<React.Fragment>
			<Dashboard />
			<div className="main_content">
				<table className="table">
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Gender</th>
						<th>Occupation</th>
						<th>Action</th>
					</tr>

					{customers.map((item) => (
						<tr>
							<td>{item.CustomerId}</td>
							<td>{item.Name}</td>
							<td>{item.Address}</td>
							<td>{item.Phone}</td>
							<td>{item.Email}</td>
							<td>{item.Gender}</td>
							<td>{item.Occupation}</td>
							<th>
								<a
									className="btn btn-sm btn-primary"
									style={{ color: "black" }}
								>
									Details
								</a>
							</th>
						</tr>
					))}
				</table>
			</div>
		</React.Fragment>
	);
};
export default CustomerList;
