import React from "react";

import Date from "../Date";
import "./DashboardDate.css";

export default function DashboardDate(params) {
  return (
    <div className="dashboardTitle">
      <div className="dbTitle">Dashboard</div>
      <div className="date">
        <Date />
      </div>
    </div>
  );
}
