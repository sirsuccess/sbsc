import React from "react";
import 'antd/dist/antd.css';
import { Alert } from "antd";

const ErrorMsg = () => {
  return (
    <div>
      <Alert
        message="Oop! something happen"
        description="kindly refresh the browser."
        type="error"
        showIcon
      />
    </div>
  );
};

export default ErrorMsg;
