import React from "react";

import DasboardShell from "../../components/features/dashboard-shell/DashboardShell";
import HomeFirstSec from "../../components/features/homeFirstSec/homeFirstSec";
import DashboardDate from "../../components/commons/DashboardDate/DashboardDate";
import Chart from  "../../components/commons/graph/Graph"

import "./Home.css"


export default function Home(params) {
  return (
    <DasboardShell>
      <DashboardDate />
      <HomeFirstSec />
      <div className="chartSec">
      <Chart/>
      <Chart/>
      </div>
    </DasboardShell>
  );
}
