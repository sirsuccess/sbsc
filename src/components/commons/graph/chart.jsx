import React from "react";
import data from "../../../Data/chartData";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import "./chart.css";

export default function BarGraph() {
  return (
    <div className="chart">
      <div className="chartTop">
        <div className="chartTitle">TOTAL OPEX Budget Statistics</div>
        <div className="chartSubTitle">
          Total Budget Spent vs Total Budget Balance
        </div>
        <div className="spentChat">
          Total Spent <span >N 8,282,289</span> Total
          Balance <span className="spentBal">N 8,282,289</span>
        </div>
      </div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5
        }}
        bgColor="red"
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />}
        <Bar dataKey="Spent" fill="#e95957" barSize={12} barGap={8} />
        <Bar dataKey="Balance" fill="#17c7bf" barSize={12} />
      </BarChart>
    </div>
  );
}
