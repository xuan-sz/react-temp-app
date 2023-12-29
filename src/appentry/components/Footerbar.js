import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const {Footer} = Layout;
const AppFooter = () => {
  const {copyright, version} = useSelector(({system}) => system);
  return (
    <Footer style={{ textAlign: 'center',position: 'fixed',bottom:0 }}>
        <div className="gx-layout-footer-content">
          <span className="copyright">{copyright || '2023 TEMP'}</span> <span className="version">version:{version||'0.0.1'}</span>
        </div>
    </Footer>
  )};
export default React.memo(AppFooter);