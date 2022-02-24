import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import { useEffect } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const history = useHistory();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [numExist, setNumExist] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(Validate());
    e.preventDefault();
  };

  const handleBlur = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://localhost:44390/api/Customers/GetExisting/" + phone + "")
      .then((response) => {
        if (response.data == "new") {
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
      errors.name = " Name Is Requeired";
    } else if (name.length < 5) {
      errors.name = " Name at least contain 5 charecter";
    }
    if (phone === "") {
      errors.phone = "Phone Is Requeired";
    } else if (isNaN(phone)) {
      errors.phone = "Only Number Allowed";
    } else if (phone.length != 11) {
      errors.phone = "Phone must be 11 digit";
    }

    if (email === "") {
      errors.email = " Email Is Requeired";
    } else if (!validator.isEmail(email)) {
      errors.email = " Email format Is not valid";
    }
    if (gender === "") {
      errors.gender = "Gender Is Requeired";
    }
    if (password === "") {
      errors.password = "Password Is Requeired";
    } else if (password.length > 20 || password.length < 6) {
      errors.password = "Password must be 6-20 charecter";
    }
    if (confirmPassword === "") {
      errors.confirmPassword = "Confirm Password Is Requeired";
    } else if (password != confirmPassword) {
      errors.confirmPassword = "Password don't match";
    }

    if (password === "" && confirmPassword != "") {
      errors.password = "Password Is Requeired";
      errors.confirmPassword = "";
    }

    if (address === "") {
      errors.address = "Address Is Requeired";
    } else if (address.length < 6) {
      errors.address = "Address at least contain 5 charecter";
    }
    //console.log(errors);
    console.log(formErrors);
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("calling ready for api");
      axios
        .post("https://localhost:44390/api/Customers", {
          Name: name,
          Address: address,
          Phone: phone,
          Email: email,
          Gender: gender,
          Password: password,
        })
        .then((response) => {
          alert("Customer Created");
          setName("");
          setPhone("");
          setEmail("");
          setGender("");
          setPassword("");
          setConfirmPassword("");
          setAddress("");
          history.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [formErrors]);

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
          />
          <p className="error">{formErrors.name}</p>
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your Phone Number"
            onChange={handleBlur}
          />
          <p className="error">{formErrors.phone}</p>
          <p className="error">{numExist}</p>
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{formErrors.email}</p>
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
          <p className="error">{formErrors.gender}</p>
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{formErrors.password}</p>
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />{" "}
          <p className="error">{formErrors.confirmPassword}</p>
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <p className="error">{formErrors.address}</p>
          <br />
          <div className="row">
            <button
              type="submit"
              className="btnSubmit  btn-primary btn-sm text-center"
            >
              SignUp
            </button>
          </div>
          <div className="row">
            <Link to="/signup/shop">
              <button
                type="button"
                className="btnSubmit  btn-primary btn-sm text-center my-2"
              >
                SignUp For Your Shop
              </button>
            </Link>
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

export default SignUp;
