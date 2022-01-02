import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import CartContext from "../store/cart-context";
import LoginContext from "../store/loginStatus-context";
const Header = (props) => {
  const loginCtx = useContext(LoginContext)
  const history = useHistory();
  let data = "";
  let path = "";


  const setPath = (e) => {
    data = JSON.parse(localStorage.getItem("user"));
    
    console.log(data);
    
    if (data !== null) {
     
      if (data.Role === "Customer") {
        path = "/user/profile";
        console.log(path)
        history.push(path);
        
      } else if (data.Role === "Shop") {
        path = "/user/profile/shopProfile";
        console.log(path);
        history.push(path);
        
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
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            {" "}
            <span className="navbar-brand mb-0 h1 fs-1 text-white">
              E-HUT
            </span>{" "}
          </NavLink>
          <div>
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
              style={{backgroundColor: "#21D192", textDecoration: "none", color: "white" }}
              value="User"
              onClick={setPath}
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
              <NavLink
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign Up
              </NavLink>
              <span style={{ color: "white" }}> or </span>
              {loginCtx.loginStatus ? (<NavLink
                to="/logout"
                style={{ textDecoration: "none", color: "white" }}
              >
                Logout
              </NavLink>) : 
              (<NavLink
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </NavLink>)}
            </span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
