import React, { useState } from "react";
import axios from "axios";
import "./RegisterAdmin.css";
import Dashboard from "../dashboard";

const RegisterAdmin = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  var data = JSON.parse(localStorage.getItem("user"));
  var cred = data.Phone + ":" + data.Password;

  const SubmitHandler = async (e) => {
    console.log(
      name + phone + email + gender + " " + password + confirmPassword + address
    );
    if (password === confirmPassword) {
      axios
        .post(
          "https://localhost:44390/api/Admins/",
          {
            Name: name,
            Address: address,
            Phone: phone,
            Email: email,
            Gender: gender,
            Password: password,
          },
          {
            headers: {
              Authorization: "Basic " + btoa(cred),
            },
          }
        )
        .then((response) => {
          console.log(response.status);
          alert("Admin Created");
          setName("");
          setPhone("");
          setEmail("");
          setGender("");
          setPassword("");
          setConfirmPassword("");
          setAddress("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <React.Fragment>
      <Dashboard />
      <br />
      <br />
      <br />
      <form action="">
        <div className="form-group form-content">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <input
            className="form-control"
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <div className="gender-radio ">
            <label className="text-md-start">Select Gender</label>
            <br />
            <div className="row">
              <div className="col">
                <input
                  className="form-check-input "
                  type="radio"
                  name="gender"
                  value="Male"
                  id=""
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="">Male</label>
              </div>
              <div className="col">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Female"
                  id=""
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="">Female</label>
              </div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />{" "}
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <div className="row">
            <button
              type="button"
              className="btnSubmit  btn-primary btn-sm text-center"
              onClick={SubmitHandler}
            >
              Register
            </button>
          </div>
          <div className="row"></div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default RegisterAdmin;
