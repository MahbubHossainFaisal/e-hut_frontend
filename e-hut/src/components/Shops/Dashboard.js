import axios from "axios";
import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import "./Dashboard.css";

const ShopDashboard = (props) => {
  var data = JSON.parse(localStorage.getItem("user"));
  const [countPendingOrder, setCountPendingOrder] = useState(0);
  const [pendingProduct, setPendingProduct] = useState([]);
  const [processingProduct, setProcessingProduct] = useState([]);
  const [countProcessingOrder, setCountProcessingOrder] = useState(0);
  const [DeliverProduct, setDeliverProduct] = useState([]);
  const [countDeliverOrder, setCountDeliverOrder] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://localhost:44390/api/SalesRecords/GetNonDeliveredRecords/" +
          data.UserId
      )
      .then((response) => {
        setCountPendingOrder(response.data.length);
        setPendingProduct(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        "https://localhost:44390/api/SalesRecords/GetRecordsByStatus/" +
          data.UserId +
          "/" +
          "Accepted"
      )
      .then((response) => {
        setCountProcessingOrder(response.data.length);
        setProcessingProduct(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        "https://localhost:44390/api/SalesRecords/GetRecordsByStatus/" +
          data.UserId +
          "/" +
          "Delivered"
      )
      .then((response) => {
        setCountDeliverOrder(response.data.length);
        setDeliverProduct(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const AcceptOrder = (srId) => (e) => {
    console.log(srId);
    axios
      .post("https://localhost:44390/api/Shops/ProductOrderAcceptance", {
        SalesRecordId: srId,
        status: "Accepted",
      })
      .then((response) => {
        console.log(response.status);
        /////////////
        axios
          .get(
            "https://localhost:44390/api/SalesRecords/GetNonDeliveredRecords/" +
              data.UserId
          )
          .then((response) => {
            setCountPendingOrder(response.data.length);
            setPendingProduct(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
        ///////////
        axios
          .get(
            "https://localhost:44390/api/SalesRecords/GetRecordsByStatus/" +
              data.UserId +
              "/" +
              "Accepted"
          )
          .then((response) => {
            setCountProcessingOrder(response.data.length);
            setProcessingProduct(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
        /////////////////
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const RejectOrder = (srId) => (e) => {
    console.log(srId);
    axios
      .post("https://localhost:44390/api/Shops/ProductOrderAcceptance", {
        SalesRecordId: srId,
        status: "Rejected",
      })
      .then((response) => {
        console.log(response.status);
        /////////////
        axios
          .get(
            "https://localhost:44390/api/SalesRecords/GetNonDeliveredRecords/" +
              data.UserId
          )
          .then((response) => {
            setCountPendingOrder(response.data.length);
            setPendingProduct(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
        ///////////
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeliverOrder = (srId) => (e) => {
    axios
      .post("https://localhost:44390/api/Shops/ProductOrderAcceptance", {
        SalesRecordId: srId,
        status: "Delivered",
      })
      .then((response) => {
        console.log(response.status);
        axios
          .get(
            "https://localhost:44390/api/SalesRecords/GetRecordsByStatus/" +
              data.UserId +
              "/" +
              "Accepted"
          )
          .then((response) => {
            setCountProcessingOrder(response.data.length);
            setProcessingProduct(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickDelivered = (e) => {
    document.querySelector(".PendingOrderEl").style.display = "none";
    document.querySelector(".ProcessingOrderEl").style.display = "none";
    document.querySelector(".DeliverOrderOrderEl").style.display = "block";
  };

  const OnClickPendingOrder = (e) => {
    document.querySelector(".PendingOrderEl").style.display = "block";
    document.querySelector(".ProcessingOrderEl").style.display = "none";
    document.querySelector(".DeliverOrderOrderEl").style.display = "none";
  };

  const OnClickProcessingOrder = (e) => {
    document.querySelector(".ProcessingOrderEl").style.display = "block";
    document.querySelector(".PendingOrderEl").style.display = "none";
    document.querySelector(".DeliverOrderOrderEl").style.display = "none";
  };

  return (
    <React.Fragment>
      <div className="DashboardComp">
        <div className="shadow-box-example z-depth-5">
          <p id="tOrderText">Pending Order</p>
          <p id="tOrderCount">{countPendingOrder}</p>
          <button
            id="penBtn"
            type="button"
            class="btn btn-outline-primary "
            onClick={OnClickPendingOrder}
          >
            Details
          </button>
        </div>
        <div className="shadow-box-example z-depth-5">
          <p id="tOrderText">Processing</p>
          <p id="tOrderCount">{countProcessingOrder}</p>
          <button
            id="penBtn"
            type="button"
            class="btn btn-outline-primary "
            onClick={OnClickProcessingOrder}
          >
            Details
          </button>
        </div>

        <div className="shadow-box-example z-depth-5">
          <p id="tOrderText">Delivered</p>
          <p id="tOrderCount">2</p>
          <button
            id="penBtn"
            type="button"
            class="btn btn-outline-primary "
            onClick={onClickDelivered}
          >
            Details
          </button>
        </div>

        <div className="shadow-box-example z-depth-5">
          <p id="tOrderText">Return Request</p>
          <p id="tOrderCount">2</p>
        </div>
      </div>
      <br />
      <br />

      <div className="PendingOrderEl">
        <table className="table">
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>

          {pendingProduct.map((item) => (
            <tr>
              <td>{item.Product.ProductId}</td>
              <td>{item.Product.Name}</td>
              <td>{item.Product.Price}</td>
              <th>
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary btn-md mx-5"
                  style={{
                    backgroundColor: "#21D192",
                    textDecoration: "none",
                    color: "white",
                  }}
                  value="Accept Order"
                  onClick={AcceptOrder(item.SalesRecordId)}
                />
              </th>
              <th>
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary btn-md mx-5"
                  style={{
                    backgroundColor: "#21D192",
                    textDecoration: "none",
                    color: "white",
                  }}
                  value="Reject Order"
                  onClick={RejectOrder(item.SalesRecordId)}
                />
              </th>
            </tr>
          ))}
        </table>
      </div>

      <div className="ProcessingOrderEl">
        <table className="table">
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>

          {processingProduct.map((item) => (
            <tr>
              <td>{item.Product.ProductId}</td>
              <td>{item.Product.Name}</td>
              <td>{item.Product.Price}</td>
              <th>
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary btn-md mx-5"
                  style={{
                    backgroundColor: "#21D192",
                    textDecoration: "none",
                    color: "white",
                  }}
                  value="Deliver"
                  onClick={DeliverOrder(item.SalesRecordId)}
                />
              </th>
            </tr>
          ))}
        </table>
      </div>

      <div className="DeliverOrderOrderEl">
        <table className="table">
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>

          {DeliverProduct.map((item) => (
            <tr>
              <td>{item.Product.ProductId}</td>
              <td>{item.Product.Name}</td>
              <td>{item.Product.Price}</td>
              <th>
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary btn-md mx-5"
                  style={{
                    backgroundColor: "#21D192",
                    textDecoration: "none",
                    color: "white",
                  }}
                  value="View Review"
                  //onClick={AcceptOrder(item.SalesRecordId)}
                />
              </th>
            </tr>
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export default ShopDashboard;
