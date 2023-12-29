import { Layout } from "antd";
import React from "react";

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