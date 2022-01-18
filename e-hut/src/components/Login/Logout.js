import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "../store/loginStatus-context";

const LogOut = () => {
	const history = useHistory();
	const loginCtx = useContext(LoginContext);
	loginCtx.changeLogin(false);
	localStorage.clear();
	history.push({
		pathname: "/home",
		state: true,
	});
	alert("User logged out");
	//window.location.reload(false);
	return <React.Fragment></React.Fragment>;
};

export default LogOut;
