import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.css";
const Products = (props) => {
  console.log(props.searchP);
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
  }, [Product]);
  return (
    <React.Fragment>
      <div className="main-content">
        {product.map((item) => (
          <Product key={item.ProductId} value={item} id={item.ProductId} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Products;
