import React from "react";

import "./bigCardTop.css";

export default function bigCardTop() {
  return (
    <div className="bigCardTop">
      <div className="top">
        <img src="./assets/icons/capex.svg" alt="" />
        <div className="top-name">Total Annual CAPEX Budget</div>
        <div className="rectangle">N 50,000,000</div>
      </div>
      <select name="" id="card-select">
        <option value="Annual">Annual</option>
      </select>
    </div>
  );
}
