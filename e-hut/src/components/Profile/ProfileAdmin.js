import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./ProfileCustomer.css";
import ImgData from "../../images/profile.jpg";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";

const ProfileAdmin = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  var data = JSON.parse(localStorage.getItem("user"));
  var cred = data.Phone + ":" + data.Password;
  const [adminId, setAdminId] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(Validate());
    e.preventDefault();
  };

  const Validate = () => {
    const errors = {};

    if (name === "") {
      errors.name = " Name Is Requeired";
    } else if (name.length < 3) {
      errors.name = " Name at least contain 3 charecter";
    }

    if (address === "") {
      errors.address = "Address Is Requeired";
    } else if (address.length < 5) {
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
        .put(
          "https://localhost:44390/api/Admins/" + adminId,
          {
            AdminId: adminId,
            Name: name,
            Phone: phone,
            Email: email,
            Address: address,
            Email: email,
            Image: image,
            Gender: gender,
            Password: password,
          },
          {
            headers: {
              Authorization: "Basic " + btoa(cred),
            },
          }
        )
        .then((res) => {
          console.log(res.status);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [formErrors]);

  React.useEffect(() => {
    var user = localStorage.getItem("user");
    if (user != null) {
      axios
        .get("https://localhost:44390/api/Admins/" + data.UserId, {
          headers: {
            Authorization: "Basic " + btoa(cred),
          },
        })
        .then((response) => {
          setAdminId(response.data.AdminId);
          setPhone(response.data.Phone);
          setEmail(response.data.Email);
          setName(response.data.Name);
          setAddress(response.data.Address);
          setImage(response.data.Image);
          setGender(response.data.Gender);
          setPassword(response.data.Password);
          console.log(response);
        })
        .catch((err) => {
          console.log(data.UserId + "error occured");
          console.log(err);
        });
    } else {
      return <Redirect to="/login" />;
    }
  }, []);

  return (
    <React.Fragment>
      <div className="profile">
        <table>
          <tr>
            <td>
              <Image
                src={ImgData}
                alt="profile"
                className=" img-thumbnail image"
              ></Image>
            </td>
            <td>
              <label htmlFor="">Admin Profile</label>
            </td>
          </tr>
        </table>
        <hr></hr>
        <Form onSubmit={SubmitHandler}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <p className="error">{formErrors.name}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                disabled={true}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={phone}
                disabled={true}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>Select Image</Form.Label>
              <Form.Control type="file" name="image" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder=""
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            <p className="error">{formErrors.address}</p>
          </Form.Group>
          <div>
            <Button variant="primary" type="submit">
              Save
            </Button>

            <NavLink to={"/home"} className="btn btn-secondary m-1">
              Back
            </NavLink>
          </div>
        </Form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default ProfileAdmin;
