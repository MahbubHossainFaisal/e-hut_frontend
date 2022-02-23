import React, { useState, useEffect } from "react";
import axios from "axios";
import "./deliveryman.css";
import Dashboard from "../dashboard";

const ShopList = () => {
	var data = JSON.parse(localStorage.getItem("user"));
	var cred = data.Phone + ":" + data.Password;
	const [deliveryman, setDeliveryman] = useState([]);
	//console.log(admin);
	useEffect(() => {
		axios
			.get("https://localhost:44390/api/Deliverymen", {
				headers: {
					Authorization: "Basic " + btoa(cred),
				},
			})
			.then((response) => {
				setDeliveryman(response.data);
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
						<th>NID</th>
						<th>Rating</th>
						<th>Action</th>
					</tr>

					{deliveryman.map((item) => (
						<tr>
							<td>{item.DeliveryManId}</td>
							<td>{item.Name}</td>
							<td>{item.Address}</td>
							<td>{item.Phone}</td>
							<td>{item.Email}</td>
							<td>{item.Nid}</td>
							<td>{item.Rating}</td>
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
export default ShopList;
