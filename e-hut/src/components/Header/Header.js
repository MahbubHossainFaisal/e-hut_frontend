import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [searchProduct, setSearchProduct] = useState("");

  const SearchProduct = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#21D192" }}
      >
        <div className="container-fluid ">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            {" "}
            <span className="navbar-brand mb-0 h1 fs-1 text-white">
              E-HUT
            </span>{" "}
          </NavLink>
          <div>
            <NavLink to={`/cart`} style={{ textDecoration: "none", color: "white" }}>
              <span className="me-5 text-white">
              <i className="fas fa-shopping-cart"></i> Cart{" "}
              </span>
            </NavLink>
            <span className="me-5 text-white">
              <i className="fas fa-user"></i> User{" "}
            </span>
            <span>
              <NavLink
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign Up
              </NavLink>
              <span style={{ color: "white" }}> or </span>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </NavLink>
            </span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
