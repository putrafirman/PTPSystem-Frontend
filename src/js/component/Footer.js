import React from "react";
import ReactDOM from "react-dom";

import VersionRelease from "./footer/VersionRelease";
import Copyright from "./footer/Copyright";

export default class Header extends React.Component {


  //main pada js
  render() {

    return(
      <div>
        <footer class="main-footer">
        <div class="container">
          <VersionRelease/>
          <Copyright/>
        </div>
        </footer>
      </div>
    )
  }
}
