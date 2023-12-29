import React, { lazy,memo,useEffect, useRef } from "react";
import { ConfigProvider } from 'antd';
import { Route, Switch, useLocation, useRouteMatch,useHistory } from "react-router-dom";
import antdCN from "antd/es/locale/zh_CN";
const MainApp = lazy(() => import('./MainApp'));
const InitPage = lazy(() => import('./initPage'));
const AppEntry = (props) => {
  const rootDiv = useRef();
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const VALID_CLASS = /(ant-select-selector)/i
  const EXCLUDED_CLASS = /(savedFlowKey|savedFormKey|savedPageKey)/i

  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/system');
    }
  }, [history, location]);

  const getPopupContainer = (trigger) => {
    if (trigger && trigger.className && typeof(trigger.className) === 'string' && trigger.className.match(VALID_CLASS)) {
      if (trigger?.parentElement) {
        if ((trigger.parentElement.className || '').match(EXCLUDED_CLASS)) {
          return document.body;
        }
      }
      return trigger?.parentElement || document.body;
    } else {
      return document.body;
    }
  }
  const RestrictedRoute = ({ component: Component, location, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          <>
          <Component {...props} />
          </>
        }
      />
    );
  }

  return (
    <ConfigProvider getPopupContainer={getPopupContainer} prefixCls="ant" locale={antdCN}>
        <Switch ref={rootDiv}>
          <Route exact path='/home' component={InitPage} />
          <RestrictedRoute path={`${match.url}`} location={location}
            component={MainApp} />
        </Switch>
    </ConfigProvider>
  )
}
export default memo(AppEntry);