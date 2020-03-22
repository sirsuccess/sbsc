import React from "react";

import "./bigCardTop.css";

export default function bigCardTop({ topData }) {
  const { img, name, value, ValBgColor, valColor } = topData;
  return (
    <div className="bigCardTop">
      <div className="top">
        <img src={img} alt="" />
        <div className="top-name">Total Annual {name} Budget</div>
        <div
          className="rectangle"
          style={{ backgroundColor: ValBgColor, color: valColor }}
        >
          N {value}
        </div>
      </div>
      <select name="" id="card-select">
        <option value="Annual">Annual</option>
      </select>
    </div>
  );
}
