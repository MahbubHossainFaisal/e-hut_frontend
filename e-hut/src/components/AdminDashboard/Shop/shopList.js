import React, { useState, useEffect } from "react";
import axios from "axios";
import "./shopList.css";
import Dashboard from "../dashboard";

const ShopList = () => {
	var data = JSON.parse(localStorage.getItem("user"));
	var cred = data.Phone + ":" + data.Password;
	const [shops, setShops] = useState([]);
	//console.log(admin);
	useEffect(() => {
		axios
			.get("https://localhost:44390/api/Shops", {
				headers: {
					Authorization: "Basic " + btoa(cred),
				},
			})
			.then((response) => {
				setShops(response.data);
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
						<th>ShopManager</th>
						<th>Sells</th>
						<th>Action</th>
					</tr>

					{shops.map((item) => (
						<tr>
							<td>{item.ShopId}</td>
							<td>{item.Name}</td>
							<td>{item.Address}</td>
							<td>{item.Phone}</td>
							<td>{item.Email}</td>
							<td>{item.ShopManager}</td>
							<td>{item.TotalSold}</td>
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
export default ShopList;
