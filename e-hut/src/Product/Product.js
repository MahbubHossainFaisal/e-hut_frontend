import React, { useState } from "react";
import "./Product.css";

const Product = (props) => {
	const [product, setProduct] = useState({
		data: {
			id: props.value.id,
			name: props.value.name,
			price: props.value.price,
			image: props.value.image,
			rating: props.value.rating,
			describtion: props.value.description,
		},
	});

	return (
		<React.Fragment>
			<div class="product-content product-wrap clearfix">
				<div class="row">
					<div class="col-md-5 col-sm-12 col-xs-12">
						<div class="product-image">
							<img
								src="unnamed.jpg"
								height="228"
								width="194"
								alt="194x228"
								class="img-responsive"
							/>
							<span class="tag2 hot">HOT</span>
						</div>
					</div>
					<div class="col-md-7 col-sm-12 col-xs-12">
						<div class="product-deatil">
							<h5 class="name">
								<a href="#">
									<span>{product.data.name}</span>
								</a>
							</h5>
							<p class="price-container">
								<span>{product.data.price}</span>
							</p>
							<span class="tag1"></span>
						</div>
						<div class="description">
							<p>{product.data.describtion} </p>
						</div>
						<div class="product-info smart-form">
							<div class="row">
								<div class="">
									<a href="javascript:void(0);" class="btn btn-success">
										Add to cart
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Product;
