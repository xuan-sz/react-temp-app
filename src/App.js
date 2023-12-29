import React, { Suspense, lazy } from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {Route, Switch} from "react-router-dom";

import configureStore, { history } from './appRedux/store';
import CircularProgress from "./components/CircularProgress";
import "./styles/index.less";
const AppEntry = lazy(() => import("./appentry/index"));
const store = configureStore();

const App = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<CircularProgress/>}>
        <Switch>
          <Route path="/" component={AppEntry} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  </Provider>;
export default App;
