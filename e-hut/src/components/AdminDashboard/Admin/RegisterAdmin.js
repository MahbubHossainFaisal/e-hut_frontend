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
    // console.log(
    //   name + phone + email + gender + " " + password + confirmPassword + address
    // );
    e.preventDefault();
    if (password === confirmPassword) {
      axios
        .post("https://localhost:44390/api/Admins", {
          Name: name,
          Address: address,
          Phone: phone,
          Email: email,
          Gender: gender,
          Password: password,
        })
        .then((response) => {
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
    } else {
      alert("Password does not match");
    }
  };

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <form action="" onSubmit={SubmitHandler}>
        <div className="form-group form-content">
          <input
            className="form-control"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required={true}
          />
          <br />
          <input
            className="form-control"
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
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
                  required={true}
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
            required={true}
          />
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required={true}
          />{" "}
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required={true}
          />
          <br />
          <div className="row">
            <button
              type="submit"
              className="btnSubmit  btn-primary btn-sm text-center"
            >
              SignUp
            </button>
          </div>
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
