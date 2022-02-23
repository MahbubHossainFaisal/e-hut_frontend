import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./shopSignUp.module.css";
import axios from "axios";
import validator from "validator";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ShopSignUp = (e) => {
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bankInfoId, setBankInfoId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [numExist, setNumExist] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(Validate());
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get("https://localhost:44390/api/Shops/GetExisting/" + phone + "")
      .then((response) => {
        if (response.data === "new") {
          setNumExist("");
        } else {
          setNumExist("Number Already Exists.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [phone]);

  const Validate = () => {
    const errors = {};

    if (name === "") {
      errors.name = "Shop Name Is Requeired";
    } else if (name.length < 2) {
      errors.name = " Name at least contain 2 charecter";
    }

    if (manager === "") {
      errors.manager = "Manager Name Is Requeired";
    } else if (manager.length < 5) {
      errors.manager = " Name at least contain 5 charecter";
    }

    if (phone === "") {
      errors.phone = "Phone Is Requeired";
    } else if (isNaN(phone)) {
      errors.phone = "Only Number Allowed";
    } else if (phone.length != 11) {
      errors.phone = "Phone must be 11 digit";
    }

    if (bankInfoId === "") {
      errors.bankInfoId = "Bank Info. Is Requeired";
    } else if (isNaN(bankInfoId)) {
      errors.bankInfoId = "Only Number Allowed";
    }

    if (email === "") {
      errors.email = " Email Is Requeired";
    } else if (!validator.isEmail(email)) {
      errors.email = " Email format Is not valid";
    }
    if (password === "") {
      errors.password = "Password Is Requeired";
    } else if (password.length > 20 || password.length < 6) {
      errors.password = "Password must be 6-20 charecter";
    }

    if (address === "") {
      errors.address = "Address Is Requeired";
    } else if (address.length < 6) {
      errors.address = "Address at least contain 6 charecter";
    }
    //console.log(errors);
    console.log(formErrors);
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
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
          history.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [formErrors]);

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
              />
              <p className="error">{formErrors.name}</p>
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
              />
              <p className="error">{formErrors.manager}</p>
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
              />
              <p className="error">{formErrors.address}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label>Phone No</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="Enter phone no"
              />
              <p className="error">{formErrors.phone}</p>
              <p className="error">{numExist}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter email"
              />
              <p className="error">{formErrors.email}</p>
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
              />
              <p className="error">{formErrors.bankInfoId}</p>
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
              />
              <p className="error">{formErrors.password}</p>
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
