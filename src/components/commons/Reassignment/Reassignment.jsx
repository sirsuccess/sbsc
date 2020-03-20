import React from "react";

import "./Reassignment.css";

export default function Reassignment({ items }) {
  return (
    <div className="Reassignment">
      <img src={items.img} alt="" />
      {items.title}
      <div className="val">{items.value}</div>
    </div>
  );
}
