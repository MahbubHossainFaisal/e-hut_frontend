import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.css";
const Products = (props) => {
	//console.log(props.location)
	//console.log(props)
	//props.modifyLogin(props.location.state)
	const [product, setProduct] = useState([]);
	const [searchProduct, setSearchProduct] = useState("");
	useEffect(() => {
		axios
			.get("https://localhost:44390/api/products", {
				headers: {
					Authorization: "Basic " + btoa("1" + ":" + "eraj"),
				},
			})
			.then((response) => {
				setProduct(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [Product]);

	return (
		<React.Fragment>
			<div className="main-content">
				<input
					className="form-control me-2 "
					type="search"
					placeholder="Search"
					aria-label="Search"
					onChange={(e) => setSearchProduct(e.target.value)}
				/>
				{product
					.filter((item) => {
						if (searchProduct == "") {
							return item;
						} else if (
							item.Name.toLowerCase().includes(searchProduct.toLowerCase())
						) {
							return item;
						}
					})
					.map((item) => (
						<Product key={item.ProductId} value={item} id={item.ProductId} />
					))}
			</div>
		</React.Fragment>
	);
};

export default Products;
