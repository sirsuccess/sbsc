import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

import data from "../../../Data/chartData";
import ChartDetail from "./ChartDetails";

import "./chart.css";

export default function BarGraph({ companyName }) {
  return (
    <div className="chart">
      <ChartDetail companyName={companyName} />
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
        <Bar dataKey="Spent" fill="#e95957" barSize={12} />
        <Bar dataKey="Balance" fill="#17c7bf" barSize={12} />
      </BarChart>
    </div>
  );
}
