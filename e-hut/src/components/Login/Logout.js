import React,{useContext} from "react";
import LoginContext from "../store/loginStatus-context";

const LogOut = () => {
  const loginCtx = useContext(LoginContext)
  loginCtx.changeLogin(false)
  localStorage.clear();
  //window.location.reload(false);
  return <React.Fragment></React.Fragment>;
};

export default LogOut;
