import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./ProfileCustomer.css";
import ImgData from "../../images/profile.jpg";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";

const ShopProfile = () => {
  var data = JSON.parse(localStorage.getItem("user"));
  var cred = data.Phone + ":" + data.Password;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("working");
    await axios
      .put(
        "https://localhost:44390/api/shops/" + ShopId,
        {
          ShopId: ShopId,
          Name: shopName,
          ShopManager: sManagerName,
          Address: Address,
          Phone: Phone,
          Email: Email,
          BankInformationId: BInfoId,
          Status: Status,
          Rating: Rating,
          TotalSold: TotalSold,
          TotalRecievedPayment: TotalRecieved,
          Password: Password,
        },
        {
          headers: {
            Authorization: "Basic " + btoa(cred),
          },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          alert("Profile Updated");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [ShopId, SetShopId] = useState("");
  const [sManagerName, SetsManagerName] = useState("");
  const [shopName, SetShopName] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Email, SetEmail] = useState("");
  const [Address, SetAddress] = useState("");
  const [sImage, SetImage] = useState("");
  const [BInfoId, SetBInfoId] = useState("");
  const [Status, SetStatus] = useState("");
  const [Rating, SetRating] = useState("");
  const [TotalSold, SetTotalSold] = useState("");
  const [TotalRecieved, SetTotalRecieved] = useState("");
  const [Password, SetPassword] = useState("");

  React.useEffect(() => {
    var user = localStorage.getItem("user");
    if (user != null) {
      var data = JSON.parse(localStorage.getItem("user"));
      axios
        .get("https://localhost:44390/api/shops/" + data.UserId, {
          headers: {
            Authorization: "Basic " + btoa(cred),
          },
        })
        .then((response) => {
          console.log(response.data);
          SetShopId(response.data.ShopId);
          SetsManagerName(response.data.ShopManager);
          SetShopName(response.data.Name);
          SetPhone(response.data.Phone);
          SetEmail(response.data.Email);
          SetAddress(response.data.Address);
          SetImage(response.data.Image);
          SetBInfoId(response.data.BankInformationId);
          SetStatus(response.data.Status);
          SetRating(response.data.Rating);
          SetTotalSold(response.data.TotalSold);
          SetTotalRecieved(response.data.TotalRecievedPayment);
          SetPassword(response.data.Password);
        })
        .catch((err) => {
          console.log(err);
        });

      //	console.log(data);
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
              <label htmlFor="">User Profile</label>
            </td>
          </tr>
        </table>
        <hr></hr>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={sManagerName}
                onChange={(event) => SetsManagerName(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Shop Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={shopName}
                onChange={(event) => SetShopName(event.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={Email}
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
                value={Phone}
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
              value={Address}
              onChange={(event) => SetAddress(event.target.value)}
            />
          </Form.Group>
          <div>
            <Button variant="primary" type="submit">
              Save
            </Button>
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

export default ShopProfile;
