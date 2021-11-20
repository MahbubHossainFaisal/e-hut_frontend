import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Products from "./components/Product/Products";
import SignUp from "./components/SignUp/SignUp";
import AddProduct from "./components/Product/AddProduct";
import ProductDetails from "./components/Product/ProductDetails";

function App() {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path="/" component={Products} />

				<Route path="/signup" component={SignUp} />

				<Route path="/login" component={Login} />
				<Route path="/products/:id" component={ProductDetails} />
				<Route path="/product/add" component={AddProduct} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
}

export default App;
