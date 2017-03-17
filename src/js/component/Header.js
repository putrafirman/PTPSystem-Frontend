import React from "react";
import ReactDOM from "react-dom";

import Nav from "./header/Nav";
import UserProfile from "./header/UserProfile";

export default class Header extends React.Component {


  //main pada js
  render() {

    return(
      <div>
        <Nav/>
        <UserProfile/>
        <header class="main-header">
        <nav class="navbar navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <a href="#" class="navbar-brand"><b>ETR</b> System</a>
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                <i class="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
        </header>
      </div>
    )
  }
}
