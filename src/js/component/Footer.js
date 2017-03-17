import React from "react";
import ReactDOM from "react-dom";

import VersionRelease from "./footer/VersionRelease";
import Copyright from "./footer/Copyright";

export default class Header extends React.Component {


  //main pada js
  render() {

    return(
      <div>
        <VersionRelease/>
        <Copyright/>
        <footer class="main-footer">
        <div class="container">
          <div class="pull-right hidden-xs">
            <b>Version</b> 1.0.0
          </div>
          <strong>Copyright &copy; 2017. Malang Dev Team.</strong> All rights reserved.
        </div>
        </footer>
      </div>
    )
  }
}
