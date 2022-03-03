import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import ReactExport from "react-export-excel";
import "./salesReport.css";

const SalesReport = (props) => {
  const [SalesReportData, setSalesReportData] = useState([]);
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  var data = JSON.parse(localStorage.getItem("user"));
  var cred = data.Phone + ":" + data.Password;

  useEffect(() => {
    axios
      .get(
        "https://localhost:44390/api/Shops/monthlySalesForYearReports/" +
          2022 +
          "/" +
          data.UserId,
        {
          headers: {
            Authorization: "Basic " + btoa(cred),
          },
        }
      )
      .then((response) => {
        setSalesReportData(response.data);
        console.log(SalesReportData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [SalesReportData]);

  return (
    <React.Fragment>
      <label className="m-3">Amount</label>
      <BarChart width={1000} height={600} data={SalesReportData}>
        <Bar dataKey="y" fill="green" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="label" />
        <YAxis dataKey="y" />
      </BarChart>
      <label className="monthLabel">Month</label>
      <div className="EDBtn">
        <ExcelFile>
          <ExcelSheet data={SalesReportData} name="Employees">
            <ExcelColumn label="Month" value="label" />
            <ExcelColumn label="Sales" value="y" />
          </ExcelSheet>
        </ExcelFile>
      </div>
    </React.Fragment>
  );
};

export default SalesReport;
