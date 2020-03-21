import React from "react";
import data from '../../../Data/chartData'
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




export default function BarGraph() {
    //   static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";
    console.log(data);

  return (
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
      <Bar dataKey="Balance" fill="#17c7bf"  barSize={12}/>
    </BarChart>
  );
}