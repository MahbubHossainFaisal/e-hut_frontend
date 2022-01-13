import { createContext, useState } from "react";

const adminRole = false;
const customerRole = false;
const shopRole = false;

const userTypeContext = createContext({
	adminRole,
	customerRole,
	shopRole,
	changeAdminVal: (val) => {
		adminRole = val;
	},
});

export default userTypeContext;
