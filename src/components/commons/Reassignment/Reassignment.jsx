import React from "react";

import "./Reassignment.css";

export default function Reassignment({ items }) {
  return (
    <div className="Reassignment">
      <div className="top-ressignment">
        <img src={items.img} alt="" className="top-img" />
        {items.title}
      </div>
      <div className="val">{items.value}</div>
    </div>
  );
}
