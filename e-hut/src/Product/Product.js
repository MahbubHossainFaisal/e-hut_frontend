import React, { useState } from "react";

const Product = (props) => {
	const [product, setProduct] = useState({
		data: {
			id: props.value.id,
			name: props.value.name,
			price: props.value.price,
			image: props.value.image,
			rating: props.value.rating,
		},
	});

	return (
		<React.Fragment>
			<div class="col-md-4 mt-2">
				<div class="card">
					<div class="card-body">
						<div class="card-img-actions">
							{" "}
							<img
								src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png"
								class="card-img img-fluid"
								width="96"
								height="350"
								alt=""
							/>{" "}
						</div>
					</div>
					<div class="card-body bg-light text-center">
						<div class="mb-2">
							<h6 class="font-weight-semibold mb-2">{product.data.name}</h6>{" "}
							<a href="#" class="text-muted" data-abc="true">
								Details
							</a>
						</div>
						<h3 class="mb-0 font-weight-semibold">{product.data.price}</h3>
						<div>
							{" "}
							<i class="fa fa-star star"></i> <i class="fa fa-star star"></i>{" "}
							<i class="fa fa-star star"></i> <i class="fa fa-star star"></i>{" "}
						</div>
						<div class="text-muted mb-3">{product.data.rating}</div>{" "}
						<button type="button" class="btn btn-primary btn-sm">
							<i class="fa fa-cart-plus mr-2"></i> Add to cart
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Product;
