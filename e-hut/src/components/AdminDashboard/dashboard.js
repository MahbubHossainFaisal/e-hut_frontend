import React from "react";
import "./dashboard.css";

const Dashboard = () => {
	return (
		<React.Fragment>
			<div className="dashBoard">
				<table>
					<tr>
						<td>
							<a className="btn btn-primary btn-sm" href="/admin/list">
								Admins
							</a>
						</td>
						<td>
							<a className="btn btn-primary btn-sm" href="/customer/list">
								Customers
							</a>
						</td>
						<td>
							<a className="btn btn-primary btn-sm" href="/deliveryman/list">
								Deliver Man
							</a>
						</td>
						<td>
							<a className="btn btn-primary btn-sm" href="/shop/list">
								Shops
							</a>
						</td>
						<td>
							<button className="btn btn-primary btn-sm">Register Admin</button>
						</td>
					</tr>
				</table>
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
