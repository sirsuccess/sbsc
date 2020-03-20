import React from 'react';

import 'antd/dist/antd.css';

import { Progress } from 'antd';


export default function ProgressCircle(params) {
  return (
    <div className="ProgressCircle">
      <Progress type="circle" percent={64} format={() => '64% Remaining'} strokeColor="#6915cf" trailColor="#e5e5e5" width={100}/>
    </div>
  );
}