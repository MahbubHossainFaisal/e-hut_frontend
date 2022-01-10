import axios from "axios";
import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import "./Dashboard.css";

const ShopDashboard = (props) => {
	var data = JSON.parse(localStorage.getItem("user"));
	const [countPendingOrder, setCountPendingOrder] = useState(0);
	const [pendingProduct, setPendingProduct] = useState([]);
	useEffect(() => {
		axios
			.get(
				"https://localhost:44390/api/SalesRecords/GetNonDeliveredRecors/" +
					data.UserId
			)
			.then((response) => {
				setCountPendingOrder(response.data.length);
				setPendingProduct(response.data);
				console.log(response.data[0].Product.Name);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const OnClickPendingOrder = (e) => {
		document.querySelector(".shop_content").style.display = "block";
	};

	return (
		<React.Fragment>
			<div className="DashboardComp">
				<div className="shadow-box-example z-depth-5">
					<p id="tOrderText">Total Order</p>
					<p id="tOrderCount">2</p>
				</div>
				<div className="shadow-box-example z-depth-5">
					<p id="tOrderText">Pending Order</p>
					<p id="tOrderCount">{countPendingOrder}</p>
					<button
						id="penBtn"
						type="button"
						class="btn btn-outline-primary "
						onClick={OnClickPendingOrder}
					>
						Details
					</button>
				</div>
				<div className="shadow-box-example z-depth-5">
					<p id="tOrderText">Total Sold</p>
					<p id="tOrderCount">2</p>
				</div>
			</div>
			<br />
			<br />
			<div className="shop_content">
				<table className="table">
					<tr>
						<th>Product Id</th>
						<th>Product Name</th>
						<th>Price</th>
						<th>Action</th>
					</tr>

					{pendingProduct.map((item) => (
						<tr>
							<td>{item.Product.ProductId}</td>
							<td>{item.Product.Name}</td>
							<td>{item.Product.Address}</td>
							<td>{item.Product.Price}</td>
							<th>
								<a className="btn btn-sm btn-primary">Delivered</a>
							</th>
						</tr>
					))}
				</table>
			</div>
		</React.Fragment>
	);
};

export default ShopDashboard;
