import React, { Component } from "react";
import Product from "./Product";

class Products extends React.Component {
	state = {
		Product: [
			{ id: "1", name: "vege", price: "$30", rating: "4.3" },
			{ id: "2", name: "oil", price: "$60", rating: "4.1" },
			{ id: "3", name: "shop", price: "$40", rating: "4.0" },
		],
	};

	render() {
		return (
			<React.Fragment>
				<div className="">
					{this.state.Product.map((item) => (
						<Product key={item.id} value={item} />
					))}
				</div>
			</React.Fragment>
		);
	}
}

export default Products;
