import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import CircularProgress from "../../components/CircularProgress";
const TestPage1 = lazy(() => import("../systemView/test1/index"));

const PublicViews = ({match}) => (
  <Suspense fallback={<CircularProgress />}>
    <Switch>
      <Route path={`${match.url}/test1`} component={TestPage1} />
    </Switch>
  </Suspense>
);

export default PublicViews;