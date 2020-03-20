import React from "react";

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import "./Graph.css";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "TOTAL CAPEX Budget Statistics",
    subcaption: "Total Budget Spent vs Total Budget Balance",
    yaxisname: "Count of Medals",
    numvisibleplot: "100",
    labeldisplay: "auto",
    canvasbgColor: "#ffffff",
    canvasbgAlpha: "100",
    canvasBgRatio: "40,60",
    canvasBgAngle: "90",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "JAN"
        },
        {
          label: "FEB"
        },
        {
          label: "MAR"
        },
        {
          label: "APR"
        },
        {
          label: "MAY"
        },
        {
          label: "JUN"
        },
        {
          label: "JUL"
        },
        {
          label: "Aug"
        },
        {
          label: "Sept"
        },
        {
          label: "Oct"
        },
        {
          label: "Nov"
        },
        {
          label: "Dec"
        }
        // {
        //   label: "Brazil"
        // },
        // {
        //   label: "NZ"
        // },
        // {
        //   label: "Spain"
        // },
        // {
        //   label: "Hungary"
        // },
        // {
        //   label: "Kenya"
        // },
        // {
        //   label: "Jamaica"
        // },
        // {
        //   label: "Cuba"
        // },
        // {
        //   label: "Croatia"
        // }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Spent",
      data: [
        {
          value: "81"
        },
        {
          value: "70"
        },
        {
          value: "67"
        },
        {
          value: "55"
        },
        {
          value: "42"
        },
        {
          value: "42"
        },
        {
          value: "41"
        },
        {
          value: "29"
        },
        {
          value: "28"
        },
        {
          value: "22"
        },
        {
          value: "21"
        },
        {
          value: "19"
        }
        // {
        //   value: "19"
        // },
        // {
        //   value: "18"
        // },
        // {
        //   value: "17"
        // },
        // {
        //   value: "15"
        // },
        // {
        //   value: "13"
        // },
        // {
        //   value: "11"
        // },
        // {
        //   value: "11"
        // },
        // {
        //   value: "10"
        // }
      ]
    },
    {
      seriesname: "Balance",
      data: [
        {
          value: "83"
        },
        {
          value: "71"
        },
        {
          value: "59"
        },
        {
          value: "52"
        },
        {
          value: "34"
        },
        {
          value: "32"
        },
        {
          value: "29"
        },
        {
          value: "32"
        },
        {
          value: "25"
        },
        {
          value: "21"
        },
        {
          value: "24"
        },
        {
          value: "17"
        }
        // {
        //   value: "20"
        // },
        // {
        //   value: "14"
        // },
        // {
        //   value: "13"
        // },
        // {
        //   value: "16"
        // },
        // {
        //   value: "14"
        // },
        // {
        //   value: "12"
        // },
        // {
        //   value: "11"
        // },
        // {
        //   value: "9"
        // }
      ]
    }
  ]
};

export default function Chart() {
  return (
    <div className="chart">
      <ReactFusioncharts
        type="scrollcolumn2d"
        width="539"
        height="437"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </div>
  );
}
