import React from "react";

const LogOut = () => {
  localStorage.clear();
  //window.location.reload(false);
  return <React.Fragment></React.Fragment>;
};

export default LogOut;
