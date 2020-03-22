import React from "react";

import DasboardShell from "../../components/features/dashboard-shell/DashboardShell";
import HomeFirstSec from "../../components/features/homeFirstSec/homeFirstSec";
import DashboardDate from "../../components/commons/DashboardDate/DashboardDate";
import Chart from "../../components/commons/chart/chart";
import CardData from "../../Data/cardData";

import "./Home.css";

export default function Home() {
  return (
    <DasboardShell>
      <DashboardDate />
      <HomeFirstSec />
      <div className="chartSec">
        {CardData.map(items => (
          <Chart companyName={items.name}/>
        ))}
      </div>
    </DasboardShell>
  );
}
