import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Container,
  Form,
  ListGroup
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CartContext from "../store/cart-context";
import classes from "./checkout.module.css";
import ThankYou from "./thankyou";

const Checkout = (props) => {
  
  const [customerName, setCustomerName] = useState("");
  const cartCtx = useContext(CartContext)
  const history = useHistory() 
  const [orderConfirmed, setOrderConfirmed] = useState(false)
  // console.log(props.location.state.subtotal)
  let date = new Date().toLocaleDateString();
  const grandTotal =
    props.location.state.subtotal - props.location.state.discount;

  // let details = JSON.parse(localStorage.getItem('orderDetails'))
  // console.log(details)
  console.log(props.location.state.details)
  useEffect(() => {
    const userID = props.location.state.UserId;
    axios
      .get("https://localhost:44390/api/customers/" + userID)
      .then((response) => {
        setCustomerName(response.data.Name);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const orderHandler = async (e) => {
    e.preventDefault();


    await axios
      .post(
        "https://localhost:44390/api/Checkout",
       props.location.state.details
      )
      .then((res) => {
        if (res.status === 200) {
          console.log("SUccessfull confirmation");
          setOrderConfirmed(true)
           cartCtx.removeEverything();
           
           
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const removeEverythingHandler = () =>{
      cartCtx.removeEverything();
      history.push('/home')

  }
  const goToHomeHandler = (flag) =>{
      setOrderConfirmed(flag)
  }
  return (
    <div>
    {!orderConfirmed ? (<Form onSubmit={orderHandler}>
      <Container className={`${classes.center} my-5`}>
        <Card
          style={{ width: "46rem" }}
          className="text-center bg-dark text-white"
        >
          <Card.Header>Checkout</Card.Header>
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Order ID</div>
              </div>
              <Badge bg="secondary">01</Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Customer Name</div>
              </div>
              <Badge bg="secondary">{customerName}</Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Order Date</div>
              </div>
              <Badge bg="secondary">{date}</Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subtotal</div>
              </div>
              <Badge bg="secondary">{props.location.state.subtotal}</Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Discount</div>
              </div>
              <Badge bg="secondary">{props.location.state.discount} BDT.</Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Grand Total</div>
              </div>
              <Badge bg="secondary">{grandTotal} BDT.</Badge>
            </ListGroup.Item>

            <ListGroup.Item>
              <input
                type="submit"
                name="submit"
                className="btn btn-primary btn-md "
                value="Confirm"
              />
              <Button variant="primary" className="mx-2" onClick={removeEverythingHandler}>
                Cancel
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </Form>) : (<ThankYou onHome={goToHomeHandler}/>)}
    </div>
  );
};

export default Checkout;
