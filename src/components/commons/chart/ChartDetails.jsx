import React from "react";

export default function ChartDetail({ companyName }) {
  return (
    <div className="chartTop">
      <div className="chartTitle">TOTAL {companyName} Budget Statistics</div>
      <div className="chartSubTitle">
        Total Budget Spent vs Total Budget Balance
      </div>
      <div className="spentChat">
        Total Spent <span>N 8,282,289</span> Total Balance{" "}
        <span className="spentBal">N 8,282,289</span>
      </div>
    </div>
  );
}
