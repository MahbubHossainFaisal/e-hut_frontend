import React from "react";
import Product from "./Product";
import "./Products.css";
import ProductData from "./ProductData";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44390/api/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <React.Fragment>
      <div className="main-content">
        {product.map((item) => (
          <Product key={item.ProductId} value={item} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Products;
