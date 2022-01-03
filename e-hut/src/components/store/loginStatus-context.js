import React from 'react';


const LoginContext = React.createContext({
   
    loginStatus: false,
    changeLogin: (val) => {}
})

export default LoginContext;