import React from "react";

import Bigcard from "../../commons/bigCard/bigCard";
import ReassignmentData from "../../../Data/ReassignmentData";
import CardData from "../../../Data/cardData";
import Reassignment from "../../commons/Reassignment/Reassignment";
import "./homeFirstSec.css";

export default function HomeFirstSec() {
  return (
    <div className="homeFirstSec">
      <div className="cardBig">
        {CardData.map(items => (
        <Bigcard items={items }/>
        ))}
      </div>
      <div className="reassignment">
        {ReassignmentData.map(items => (
          <Reassignment items={items } />
        ))}
      </div>
    </div>
  );
}
