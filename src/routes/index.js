import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "../utils/asyncComponent";

const App = ({ match }) => {
  const { headless } = useSelector(({ system }) => system);
  const headlessRef = useRef();
  useEffect(() => {
    if (headless) {
      new ResizeObserver(function () {
      }).observe(headlessRef.current);
    }
    console.log('match>>>>>>>>>>',match)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="gx-main-content-wrapper" ref={headlessRef}>
      <Switch>
        <Route path={`${match.url}system`} component={asyncComponent(() => import('./systemView'))} />
        <Route path={`${match.url}page`} component={asyncComponent(() => import('./publicview'))} />
      </Switch>
    </div>
  )
};

export default App;
