import React, { Component } from "react";
import Product from "./Product";
import "./Products.css";

class Products extends React.Component {
	state = {
		Product: [
			{
				id: "1",
				name: "vege",
				price: "$30",
				rating: "4.3",
				description: "vegetable forbaa",
			},
			{
				id: "2",
				name: "oil",
				price: "$60",
				rating: "4.1",
				description: "food forbaa",
			},
			{
				id: "3",
				name: "shop",
				price: "$40",
				rating: "4.0",
				description: "fruits forbaa",
			},
			{
				id: "1",
				name: "vege",
				price: "$30",
				rating: "4.3",
				description: "vegetable forbaa",
			},
			{
				id: "2",
				name: "oil",
				price: "$60",
				rating: "4.1",
				description: "food forbaa",
			},
			{
				id: "3",
				name: "shop",
				price: "$40",
				rating: "4.0",
				description: "fruits forbaa",
			},
			{
				id: "1",
				name: "vege",
				price: "$30",
				rating: "4.3",
				description: "vegetable forbaa",
			},
			{
				id: "2",
				name: "oil",
				price: "$60",
				rating: "4.1",
				description: "food forbaa",
			},
			{
				id: "3",
				name: "shop",
				price: "$40",
				rating: "4.0",
				description: "fruits forbaa",
			},
		],
	};

	render() {
		return (
			<React.Fragment>
				<div className="main-content">
					{this.state.Product.map((item) => (
						<Product key={item.id} value={item} />
					))}
				</div>
			</React.Fragment>
		);
	}
}

export default Products;
