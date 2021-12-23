import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import CartProvider from './components/store/CartProvider';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
	
	<BrowserRouter>
	<CartProvider>
		<App />
	</CartProvider>
	</BrowserRouter>
	,
	document.getElementById("root")
);
reportWebVitals();
