import React, { useState } from "react";
import "./orderDashBoard.css";
import PlacedOrder from "./PlacedOrders/placedOrder";
import OrderHistory from "./OrderHistory/orderHistory";
import Rating from "./ProvideRating/ProvideRating";

const OrderDashboard = () => {
	const [showOrder, setShowOrder] = useState(true);
	const [showHistory, setShowHistory] = useState(false);
	const [showProvideRating, setShowProvideRating] = useState(false);
	const [itemData, setItemData] = useState([]);

	let PlacedOrderClick = () => {
		setShowOrder(true);
		setShowHistory(false);
		setShowProvideRating(false);
	};
	let OrderHistoryClick = () => {
		setShowOrder(false);
		setShowHistory(true);
		setShowProvideRating(false);
	};

	let ProvideRatingHandler = (e) => {
		setItemData(e.currentTarget.getAttribute("itemValue"));
		//console.log(e.currentTarget.getAttribute("itemValue"));
		setShowOrder(false);
		setShowHistory(false);
		setShowProvideRating(true);
	};

	return (
		<React.Fragment>
			<div className="dashBoard">
				<table>
					<tr>
						<td>
							<button
								className="btn btn-primary btn-sm"
								onClick={PlacedOrderClick}
							>
								Placed Orders
							</button>
						</td>
						<td>
							<button
								className="btn btn-primary btn-sm"
								onClick={OrderHistoryClick}
							>
								Order History
							</button>
						</td>
					</tr>
				</table>
				{showOrder && <PlacedOrder />}
				{showHistory && <OrderHistory handlerFunc={ProvideRatingHandler} />}
				{showProvideRating && <Rating id={itemData} />}
			</div>
		</React.Fragment>
	);
};

export default OrderDashboard;
