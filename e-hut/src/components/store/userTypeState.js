import UserTypeContext from "./userTypeContext";
import { useState } from "react";

const UserTypeState = (props) => {
	return (
		<UserTypeContext.Provider value={UserTypeContext}>
			{props.children}
		</UserTypeContext.Provider>
	);
};

export default UserTypeState;
