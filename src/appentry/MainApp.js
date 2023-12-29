import { Layout } from "antd";
import $ from 'jquery';
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import App from "../routes/index";
import { useRouteMatch } from "react-router-dom";
import { Sidebar,Footerbar,Headbar } from './components'
const {Content} = Layout;
const MainApp = () => {
  const {headless} = useSelector(({system}) => system);
  const match = useRouteMatch();
  const rootDiv = useRef();

  const onScroll = (e) => {
    if (e.target.scrollTop > 30) {
      $("header.ant-layout-header").addClass("hidden");
      $("main.ant-layout-content.gx-layout-content").addClass("hidden");
    } else {
      $("header.ant-layout-header").removeClass("hidden");
      $("main.ant-layout-content.gx-layout-content").removeClass("hidden");
      window.scrollTo(0, 0);
    }
  }

  if (headless) {//单页，没menu
    return (
      <div className="layout-headless" ref={rootDiv} onScroll={onScroll}>
        <App match={match}/>
      </div>
    )
  } else {
    return (
      <Layout className="gx-app-layout" ref={rootDiv}
        style={{
          minHeight: '100vh',
        }}
      >
        <Sidebar />
        <Layout>
          <Headbar/>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <App match={match}/>
          </Content>
          <Footerbar />
        </Layout>
      </Layout>
    )
  }
};
export default MainApp;

