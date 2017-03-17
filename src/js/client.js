import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";

var app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="home" component={Home}></Route>
    </Route>
    <Route path="employee" component={Layout}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="home" component={Home}></Route>
    </Route>
  </Router>
  , app);
