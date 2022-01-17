import React, { useState, useEffect } from "react";
import axios from "axios";
import "./orderHistory.css";

const OrderHistory = (props) => {
	var data = JSON.parse(localStorage.getItem("user"));
	const [orderData, setorderData] = useState([]);
	const [dataSize, setDataSize] = useState(0);

	useEffect(() => {
		axios
			.get(
				"https://localhost:44390/api/Customers/GetRecordsByStatus/" +
					data.UserId +
					"/Delivered"
			)
			.then((response) => {
				setorderData(response.data);
				setDataSize(response.data.length);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<React.Fragment>
			<div className="OH__mainContent">
				<div className="OH__Title">
					<h3>Order History</h3>
				</div>
				<h5>Total orders {dataSize}</h5>
				<table className="table">
					<tr>
						<th>O. ID</th>
						<th>P. ID</th>
						<th>Name</th>
						<th>Details</th>
						<th>Warranty</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Date</th>
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
							<td>
								<button
									className="btn btn-sm btn-primary"
									style={{ color: "black" }}
									onClick={props.handlerFunc}
									itemValue={item.SalesRecordId}
								>
									Provide Rating
								</button>
							</td>
						</tr>
					))}
				</table>
			</div>
		</React.Fragment>
	);
};

export default OrderHistory;
