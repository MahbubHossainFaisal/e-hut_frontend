import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import CartContext from "../store/cart-context";
import LoginContext from "../store/loginStatus-context";
import userTypeContext from "../store/userTypeContext";

const Header = (props) => {
  const loginCtx = useContext(LoginContext);
  const history = useHistory();
  let data = "";
  let pathProfile = "";
  var pathHome = "";
  var pathDashboard = "";

  const setPathProfile = (e) => {
    data = JSON.parse(localStorage.getItem("user"));
    if (data !== null) {
      if (data.Role === "Customer") {
        pathProfile = "/user/profile";
        history.push(pathProfile);
      } else if (data.Role === "Shop") {
        pathProfile = "/user/profile/shopProfile";
        history.push(pathProfile);
      } else if (data.Role === "Admin") {
        pathProfile = "/user/profile/admin";
        history.push(pathProfile);
      }
    }
  };

  const setPathHome = (e) => {
    data = JSON.parse(localStorage.getItem("user"));

    console.log(data);

    if (data !== null) {
      if (data.Role === "Customer") {
        pathHome = "/home";
        history.push(pathHome);
      } else if (data.Role === "Shop") {
        pathHome = "/shop/dashboard";
        history.push(pathHome);
      } else if (data.Role === "Admin") {
        pathHome = "/admin/dashboard";
        history.push(pathHome);
      }
    }
  };

  const setPathDashboard = (e) => {
    data = JSON.parse(localStorage.getItem("user"));

    console.log(data);

    if (data !== null) {
      if (data.Role === "Customer") {
        pathDashboard = "/customer/order/details";
        history.push(pathDashboard);
      } else if (data.Role === "Shop") {
        pathDashboard = "/shop/dashboard";
        history.push(pathDashboard);
      } else if (data.Role === "Admin") {
        pathDashboard = "/admin/dashboard";
        history.push(pathDashboard);
      }
    }
  };
  const [searchProduct, setSearchProduct] = useState("");
  //using cartContext
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

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
          <input
            type="submit"
            name="submit"
            className="btn btn-primary btn-md mx-5"
            style={{
              backgroundColor: "#21D192",
              textDecoration: "none",
              color: "white",
            }}
            value="E-HUT"
            onClick={setPathHome}
          />
          {/* <NavLink
            to={(onClick = { setPath })}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <span className="navbar-brand mb-0 h1 fs-1 text-white">
              E-HUT
            </span>{" "}
          </NavLink> */}
          <div>
            <input
              type="submit"
              name="submit"
              className="btn btn-primary btn-md mx-5"
              style={{
                backgroundColor: "#21D192",
                textDecoration: "none",
                color: "white",
              }}
              value="Dashboard"
              onClick={setPathDashboard}
            />

            <NavLink
              to={`/cart`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <span className="me-5 text-white">
                <i className="fas fa-shopping-cart"></i> View Cart{" "}
                <span style={{ color: "yellow" }}>{numberOfCartItems}</span>
              </span>
            </NavLink>

            <input
              type="submit"
              name="submit"
              className="btn btn-primary btn-md mx-5"
              style={{
                backgroundColor: "#21D192",
                textDecoration: "none",
                color: "white",
              }}
              value="User"
              onClick={setPathProfile}
            />

            {/**
              <NavLink
              to={path}
              style={{ textDecoration: "none", color: "white" }}
              
            >
              <span className="me-5 text-white">
                <i className="fas fa-user"></i> User{" "}
              </span>
            </NavLink>
              */}
            <span>
              {loginCtx.loginStatus ? (
                <NavLink
                  to="/logout"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Logout
                </NavLink>
              ) : (
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
              )}
            </span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
