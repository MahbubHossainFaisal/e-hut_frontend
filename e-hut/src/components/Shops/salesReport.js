import React from "react";
import BarChart from "react-bar-chart";
const SalesReport = (props) => {
  const data = [
    { text: "Man", value: 500 },
    { text: "Woman", value: 300 },
  ];
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  return (
    <React.Fragment>
      <div style={{ width: "50%" }}>
        <BarChart
          ylabel="Quantity"
          width={500}
          height={500}
          margin={margin}
          data={data}
          //onBarClick={this.handleBarClick}
        />
      </div>
    </React.Fragment>
  );
};

export default SalesReport;
