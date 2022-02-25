import React, { useState, useEffect } from "react";
import "./placedOrder.css";
import axios from "axios";

const PlacedOrder = () => {
	var data = JSON.parse(localStorage.getItem("user"));
	var cred = data.Phone + ":" + data.Password;
	const [orderData, setorderData] = useState([]);
	const [datasize, setDatasize] = useState(0);

	let CancelOrder = (e) => {
		let sId = e.currentTarget.getAttribute("id");
		axios
			.post(
				"https://localhost:44390/api/Shops/ProductOrderAcceptance",
				{
					SalesRecordId: sId,
					status: "Canceled",
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
		console.log(sId);
	};

	useEffect(() => {
		axios
			.get(
				"https://localhost:44390/api/Customers/GetRecordsByStatus/" +
					data.UserId +
					"/Pending",
				{
					headers: {
						Authorization: "Basic " + btoa(cred),
					},
				}
			)
			.then((response) => {
				setorderData(response.data);
				setDatasize(response.data.length);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [orderData]);

	return (
		<React.Fragment>
			<div className="PO__mainContent">
				<div className="PO__Title">
					<h3>Current Orders:</h3>
				</div>
				<div>
					<h4>Total:{datasize}</h4>
				</div>
				<table className="table">
					<tr>
						<th>O. ID</th>
						<th>P. ID</th>
						<th>Product</th>
						<th>Details</th>
						<th>Warranty</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Date</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
					{orderData.map((item) => (
						<tr>
							<td>{item.SalesRecordId}</td>
							<td>{item.Product.ProductId}</td>
							<td>{item.Product.Name}</td>
							<td>{item.Product.Details}</td>
							<td>{item.Product.Warranty}</td>
							<td>{item.quantity}</td>
							<td>{item.Product.Price}</td>
							<td>{item.Date}</td>
							<td>{item.Status}</td>
							<td>
								<button
									className="btn-danger btn btn-sm"
									style={{ color: "black" }}
									onClick={CancelOrder}
									id={item.SalesRecordId}
								>
									Cancel Order
								</button>
							</td>
						</tr>
					))}
				</table>
			</div>
		</React.Fragment>
	);
};

export default PlacedOrder;
