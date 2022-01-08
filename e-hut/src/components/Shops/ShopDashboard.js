import axios from "axios";
import React, { useState } from "react";
import reactDom from "react-dom";
import CreateProductShop from "../Product/CreateProduct";
import "./ShopDashboard.css";

const ShopDashboard = (props) => {
  return (
    <React.Fragment>
      <br />
      <input
        type="submit"
        name="submit"
        className="btn btn-primary btn-md mx-5"
        style={{
          backgroundColor: "#21D192",
          textDecoration: "none",
          color: "white",
        }}
        value="DashBoard"
      />
      <input
        type="submit"
        name="submit"
        className="btn btn-primary btn-md mx-5"
        style={{
          backgroundColor: "#21D192",
          textDecoration: "none",
          color: "white",
        }}
        value="Create Product"
        onClick={CreateProduct}
      />
      <input
        type="submit"
        name="submit"
        className="btn btn-primary btn-md mx-5"
        style={{
          backgroundColor: "#21D192",
          textDecoration: "none",
          color: "white",
        }}
        value="Add Product"
        onClick={AddProductDistribution}
      />
      <br />
      <div class="cProduct">
        <CreateProductShop></CreateProductShop>
      </div>
    </React.Fragment>
  );
};
const CreateProduct = (e) => {
  document.querySelector(".cProduct").style.display = "block";
};

const AddProductDistribution = (e) => {
  document.querySelector(".cProduct").style.display = "none";
};

export default ShopDashboard;
