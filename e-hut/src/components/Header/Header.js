import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <React.Fragment>
           <nav className="navbar navbar-light " style={{ backgroundColor: "#21D192" }}>
            <div className="container-fluid ">
               <NavLink to='/' style={{ textDecoration: 'none' }}> <span className="navbar-brand mb-0 h1 fs-1 text-white">E-HUT</span> </NavLink>
           
            <form className="d-flex">
            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white" type="submit">Search</button>
            </form>
            <div >
                <span className="me-5 text-white"><i className="fas fa-shopping-cart"></i> Cart </span>
                <span className="me-5 text-white"><i className="fas fa-user"></i> User </span>
                <span>
                <NavLink to='/signup' style={{ textDecoration: 'none' }}>Sign UP</NavLink>
                /
                <NavLink to='/login' style={{ textDecoration: 'none' }}>Login</NavLink>
                </span>
            </div>
           
            </div>
            
           </nav>
            
        </React.Fragment>
    )
}

export default Header
