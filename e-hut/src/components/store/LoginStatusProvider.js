import React, { useState } from 'react'
import LoginContext from './loginStatus-context'

const LoginStatusProvider = (props) => {
    const [login,setLogin] = useState()
    const loginHandler = (val) =>{
        setLogin(val)
    }
    const loginContext = {
        loginStatus: login,
        changeLogin: loginHandler
    }
    return (
     <LoginContext.Provider value={loginContext}>
        {props.children}
    </LoginContext.Provider>
    )
}

export default LoginStatusProvider
