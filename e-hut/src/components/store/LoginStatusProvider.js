import React, { useState } from 'react'
import LoginContext from './loginStatus-context'

const LoginStatusProvider = (props) => {
    let user = localStorage.getItem('user')

    const [login,setLogin] = useState(user? true : false)
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
