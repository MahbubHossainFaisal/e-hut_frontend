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
    },
  });

  return (
    <React.Fragment>
      <div class="product-content product-wrap clearfix">
        <div class="row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="product-image">
              <img
                src="https://via.placeholder.com/194x228/87CEFA"
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
                  Product Name Title Here <span>Category</span>
                </a>
              </h5>
              <p class="price-container">
                <span>$99</span>
              </p>
              <span class="tag1"></span>
            </div>
            <div class="description">
              <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
            </div>
            <div class="product-info smart-form">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-6">
                  <a href="javascript:void(0);" class="btn btn-success">
                    Add to cart
                  </a>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6">
                  <div class="rating">
                    <label for="stars-rating-5">
                      <i class="fa fa-star"></i>
                    </label>
                    <label for="stars-rating-4">
                      <i class="fa fa-star"></i>
                    </label>
                    <label for="stars-rating-3">
                      <i class="fa fa-star text-primary"></i>
                    </label>
                    <label for="stars-rating-2">
                      <i class="fa fa-star text-primary"></i>
                    </label>
                    <label for="stars-rating-1">
                      <i class="fa fa-star text-primary"></i>
                    </label>
                  </div>
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