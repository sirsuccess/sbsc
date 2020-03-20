import React from "react";

import Bigcard from "../../commons/bigCard/bigCard";
import Data from "../../../Data/ReassignmentData";
import Reassignment from "../../commons/Reassignment/Reassignment";
import "./homeFirstSec.css";

export default function HomeFirstSec(params) {
  return (
    <div className="homeFirstSec">
      <div className="cardBig">
        <Bigcard />
        <Bigcard />
      </div>
      <div>
        {Data.map(items => (
          <Reassignment items={items } />
        ))}
      </div>
    </div>
  );
}
