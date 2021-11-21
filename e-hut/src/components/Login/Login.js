import "./Login.css";
import axios from "axios";
import React, { Component } from "react";
import { Form } from "react-bootstrap";

let email, passWord;
const setEmail = (event) => {
  email = event.target.value;
};

const setPassword = (event) => {
  passWord = event.target.value;
};

const handleSubmit = (e) => {
  e.preventDefault();

  const data = {
    email: email,
    passWord: passWord,
  };
  axios
    .post("https://localhost:44390/api/Admins", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Login = () => {
  return (
    <div id="login">
      <br />
      <br />
      <br />
      <div class="container">
        <div
          id="login-row"
          class="row justify-content-center align-items-center"
        >
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form id="login-form" class="form" onSubmit={handleSubmit}>
                <h3 class="text-center text-info">Login</h3>
                <div class="form-group">
                  <label for="username" class="text-info">
                    Username:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control"
                    onChange={setEmail}
                  />
                </div>
                <div class="form-group">
                  <label for="password" class="text-info">
                    Password:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="form-control"
                    onChange={setPassword}
                  />
                </div>
                <div class="form-group">
                  <label for="remember-me" class="text-info">
                    <span>Remember me</span> 
                    <span>
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      />
                    </span>
                  </label>
                  <br />
                  <input
                    type="submit"
                    name="submit"
                    class="btn btn-info btn-md"
                    value="Submit"
                  />
                </div>
                <div id="register-link" class="text-right">
                  <a href="#" class="text-info">
                    Register here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
