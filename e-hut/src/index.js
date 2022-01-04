import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import CartProvider from './components/store/CartProvider';
import LoginStatusProvider from "./components/store/LoginStatusProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
	
	<BrowserRouter>
	<CartProvider>
		<LoginStatusProvider>
			<App />
		</LoginStatusProvider>
	</CartProvider>
	</BrowserRouter>
	,
	document.getElementById("root")
);
reportWebVitals();
