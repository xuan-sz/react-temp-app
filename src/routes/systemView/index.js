import React, { Suspense, lazy } from "react";
import {Route, Switch} from "react-router-dom";

import CircularProgress from "../../components/CircularProgress";
const TestPage1 = lazy(() => import("./test1"));
const TestPage2 = lazy(() => import("./test2"));

const SystemViews = ({match}) => (
  <Suspense fallback={<CircularProgress />}>
    <Switch>
      <Route path={`${match.url}/test1`} component={TestPage1} />
      <Route path={`${match.url}/test2`} component={TestPage2} />
    </Switch>
  </Suspense>
);

export default SystemViews;