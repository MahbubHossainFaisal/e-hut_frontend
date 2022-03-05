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
  const [year, setYear] = useState([]);

  const onInputChange = (e) => {
    setYear(e.target.value);
  };

  useEffect(
    () => {
      axios
        .get(
          "https://localhost:44390/api/Shops/monthlySalesForYearReports/" +
            year +
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
          //console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [SalesReportData],
    [year]
  );

  return (
    <React.Fragment>
      <div className="selectYear">
        <select
          className="form-control"
          name="Year"
          onChange={(e) => onInputChange(e)}
        >
          <option value="0">Select Year</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>

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
