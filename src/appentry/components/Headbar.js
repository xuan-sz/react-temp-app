import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const {Header} = Layout;
const Headbar = () => {
  return (
    <Header
    style={{
      padding: 0,
      background: '#fff',
    }}>
      Header
    </Header>
  )};
export default React.memo(Headbar);