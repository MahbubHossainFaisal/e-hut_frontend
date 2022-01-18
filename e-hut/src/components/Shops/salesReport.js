import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import ReactExport from "react-export-excel";
import "./salesReport.css";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const SalesReport = (props) => {
  const [SalesReportData, setSalesReportData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://localhost:44390/api/Shops/monthlySalesForYearReports/" + 2021
      )
      .then((response) => {
        setSalesReportData(response.data);
        console.log(SalesReportData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <BarChart width={600} height={600} data={SalesReportData}>
        <Bar dataKey="y" fill="green" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="label" />
        <YAxis dataKey="y" />
      </BarChart>
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
