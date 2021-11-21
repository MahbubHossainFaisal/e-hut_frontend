import React from "react";
import { Col, Row } from 'react-bootstrap';
import classes from './shopSignUp.module.css';
const ShopSignUp = () => {
    
        return (
            <form className={`${classes.form} bg-white`}>
                <h3>Sign Up For Your Shop</h3>

                <Row> 
                    <Col md={6}>
                        <div className="form-group">
                    <label>Shop Name</label>
                    <input type="text" className="form-control" placeholder="Enter shop name" />
                </div>

               
                    </Col>
                    <Col md={6}>
                         <div className="form-group">
                    <label>Shop Manager</label>
                    <input type="text" className="form-control" placeholder="Enter shop manager name" />
                </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <div className="form-group">
                    <label>Shop Address</label>
                    <input type="text" className="form-control" placeholder="Enter shop address" />
                    </div>
                    </Col>
                    <Col md={6}>
                       <div className="form-group">
                    <label>Phone No</label>
                    <input type="number" className="form-control" placeholder="Enter phone no" />
                       </div> 
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    </Col>
                    <Col md={6}>
                        <div className="form-group">
                    <label>Bank Information ID</label>
                    <input type="number" className="form-control" placeholder="Enter bank info id" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    </Col>
                </Row>
                

                <button type="submit" className="btn btn-primary btn-block my-2">Sign Up</button>
                <p className="my-auto">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    
}

export default ShopSignUp