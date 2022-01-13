import React from "react";
import "./orderDashBoard.css";

const orderDashboard = () => {
	return (
		<React.Fragment>
			<div className="dashBoard">
				<table>
					<tr>
						<td>
							<a className="btn btn-primary btn-sm">Current Orders</a>
						</td>
						<td>
							<a className="btn btn-primary btn-sm">Give Rating</a>
						</td>
						<td>
							<a className="btn btn-primary btn-sm">Order History</a>
						</td>
					</tr>
				</table>
			</div>
		</React.Fragment>
	);
};

export default orderDashboard;
