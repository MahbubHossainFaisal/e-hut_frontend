import axios from "axios";
import React, { useState } from "react";
import reactDom from "react-dom";
import CreateProductShop from "../Product/CreateProduct";
import Dashboard from "../Shops/Dashboard";
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
        onClick={OnClickDashboard}
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
      <br />
      <div class="dBoard">
        <Dashboard></Dashboard>
      </div>
      <br />
    </React.Fragment>
  );
};
const OnClickDashboard = (e) => {
  document.querySelector(".dBoard").style.display = "block";
  document.querySelector(".cProduct").style.display = "none";
};
const CreateProduct = (e) => {
  document.querySelector(".cProduct").style.display = "block";
  document.querySelector(".dBoard").style.display = "none";
};

const AddProductDistribution = (e) => {};

export default ShopDashboard;
