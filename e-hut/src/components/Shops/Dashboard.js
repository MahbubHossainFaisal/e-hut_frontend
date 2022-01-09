import axios from "axios";
import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import "./Dashboard.css";

const ShopDashboard = (props) => {
  var data = JSON.parse(localStorage.getItem("user"));
  const [countPendingOrder, setCountPendingOrder] = useState(0);
  useEffect(() => {
    axios
      .get(
        "https://localhost:44390/api/SalesRecords/GetNonDeliveredRecors/" +
          data.UserId
      )
      .then((response) => {
        setCountPendingOrder(response.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="DashboardComp">
        <div className="shadow-box-example z-depth-5">
          <p id="tOrderText">Total Order</p>
          <p id="tOrderCount">2</p>
        </div>
        <div className="shadow-box-example z-depth-5">
          <p id="tOrderText">Pending Order</p>
          <p id="tOrderCount">{countPendingOrder}</p>
        </div>
        <div className="shadow-box-example z-depth-5">
          <p id="tOrderText">Total Sold</p>
          <p id="tOrderCount">2</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopDashboard;
