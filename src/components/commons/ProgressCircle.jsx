import React from 'react';

import 'antd/dist/antd.css';

import { Progress } from 'antd';


export default function ProgressCircle({pecentageDate}) {
  const {percentage, circleColor}=pecentageDate
  return (
    <div className="ProgressCircle" >
      <Progress type="circle" percent={percentage} format={() => `${percentage}% Remaining`} strokeColor={circleColor} trailColor="#e5e5e5" width={150} strokeWidth={8}/>
    </div>
  );
}