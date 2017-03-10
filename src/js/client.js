import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout2 from "./pages/Layouts";


var app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="productlist" component={ProductList}></Route>
      <Route path="about" component={Aboutus}></Route>
      <Route path="detail/:id" component={Detail}></Route>
    </Route>
  </Router>
  , app);
