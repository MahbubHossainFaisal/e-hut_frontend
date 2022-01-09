import React, { useState, useEffect } from "react";
import axios from "axios";
import "./adminList.css";
import Dashboard from "../dashboard";

const AdminList = () => {
	var data = JSON.parse(localStorage.getItem("user"));
	var cred = data.Phone + ":" + data.Password;
	const [admin, setAdmin] = useState([]);
	//console.log(admin);
	useEffect(() => {
		axios
			.get("https://localhost:44390/api/Admins", {
				headers: {
					Authorization: "Basic " + btoa(cred),
				},
			})
			.then((response) => {
				setAdmin(response.data);
				console.log(response.data);
				console.log(admin);
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
						<th>Action</th>
					</tr>

					{admin.map((item) => (
						<tr>
							<td>{item.AdminId}</td>
							<td>{item.Name}</td>
							<td>{item.Address}</td>
							<td>{item.Phone}</td>
							<td>{item.Email}</td>
							<td>{item.Gender}</td>
							<th>
								<a className="btn btn-sm btn-primary">Details</a>
							</th>
						</tr>
					))}
				</table>
			</div>
		</React.Fragment>
	);
};
export default AdminList;
