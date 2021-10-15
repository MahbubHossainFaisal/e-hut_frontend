import React from "react";
import Product from "./Product";

import "./Products.css";
import ProductData from './ProductData'
function Products () {
	

	
		return (
			<React.Fragment>
				<div className="main-content">
					{ProductData.map((item) => (
						<Product key={item.id} value={item} />
					))}
				</div>
			</React.Fragment>
		);
	
}

export default Products;
