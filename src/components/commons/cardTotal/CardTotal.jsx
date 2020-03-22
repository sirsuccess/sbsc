import React from "react";

import "./CardTotal.css";

export default function CardTotal({ transaction }) {
  const { name, spentImg, spentAmount, balImag, balAmount } = transaction;

  return (
    <div className="CardTotal">
      <div className="spentBig">
        <img src={spentImg} alt="transaction spending" />
        <div className="innerSpent">
          <div className="spentTitle">
            Total <span>{name}</span> Spent
          </div>
          <div className="spentVal">N{spentAmount}</div>
        </div>
      </div>
      <div className="spentBig">
        <img src={balImag} alt="transaction spending" />
        <div className="innerSpent">
          <div className="spentTitle">
            Total <span>{name}</span> Balance
          </div>
          <div className="spentVal">N{balAmount}</div>
        </div>
      </div>
    </div>
  );
}
