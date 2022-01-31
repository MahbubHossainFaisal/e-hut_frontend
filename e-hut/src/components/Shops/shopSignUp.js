import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./shopSignUp.module.css";
import axios from "axios";

const ShopSignUp = () => {
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bankInfoId, setBankInfoId] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(name,manager,address,phone,email,bankInfoId,password)

    await axios
      .post("https://localhost:44390/api/shops", {
        Name: name,
        ShopManager: manager,
        Address: address,
        Phone: phone,
        Email: email,
        BankInformationId: bankInfoId,
        Status: false,
        Rating: 0,
        totalSold: 0.0,
        totalRecievedPayment: 0.0,
        password: password,
      })
      .then((res) => {
        console.log(res.data.Status);
        alert("Registration Successful");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <br />
      <br />
      <form className={`${classes.form} bg-white`} onSubmit={submitHandler}>
        <h3>Sign Up For Your Shop</h3>

        <Row>
          <Col md={6}>
            <div className="form-group">
              <label>Shop Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter shop name"
                required
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label>Shop Manager</label>
              <input
                type="text"
                value={manager}
                onChange={(e) => setManager(e.target.value)}
                className="form-control"
                placeholder="Enter shop manager name"
                required
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="form-group">
              <label>Shop Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                placeholder="Enter shop address"
                required
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label>Phone No</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="Enter phone no"
                required
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label>Bank Information ID</label>
              <input
                type="number"
                value={bankInfoId}
                onChange={(e) => setBankInfoId(e.target.value)}
                className="form-control"
                placeholder="Enter bank info id"
                required
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter password"
                required
              />
            </div>
          </Col>
        </Row>

        <button type="submit" className="btn btn-primary btn-block my-2">
          Sign Up
        </button>
        <p className="my-auto">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default ShopSignUp;
