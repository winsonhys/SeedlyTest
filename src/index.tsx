import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import configureStore from "./redux/configureStore";
import * as serviceWorker from "./serviceWorker";

// Wraps the gql client on top of our app.
const app = (
  <Provider store={configureStore()}>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/">Hello</Route>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
