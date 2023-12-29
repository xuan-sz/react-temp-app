import React from "react";
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const CircularProgress = ({className}) => <div className={`loader ${className}`}>
 <Spin size={"large"} indicator={antIcon} />
</div>;
export default CircularProgress;
