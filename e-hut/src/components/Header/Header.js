import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../store/cart-context";
const Header = () => {
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
						<NavLink
							to={"/user/profile"}
							style={{ textDecoration: "none", color: "white" }}
						>
							<span className="me-5 text-white">
								<i className="fas fa-user"></i> User{" "}
							</span>
						</NavLink>
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

							<NavLink
								to="/logout"
								style={{ textDecoration: "none", color: "white" }}
							>
								Logout
							</NavLink>
						</span>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Header;
