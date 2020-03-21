import React from "react";

import ProgressCircle from "../ProgressCircle";
import BigDataTop from "../bigCardTop/bigCardTop";
import CardTotal from "../cardTotal/CardTotal";
import "./bigCard.css";

export default function bigCard({ items }) {
  // console.log("items", items);

  const {
    img,
    name,
    value,
    ValBgColor,
    percentage,
    circleColor,
    spentImg,
    spentAmount,
    balImag,
    balAmount
  } = items;

  return (
    <div className="bigCard">
      <BigDataTop topData={{ img, name, value, ValBgColor }} />
      <div className="bigcardMidle">

      <ProgressCircle pecentageDate={{ percentage, circleColor }} />
      <CardTotal
        transaction={{ name, spentImg, spentAmount, balImag, balAmount }}
      />
      </div>
    </div>
  );
}
