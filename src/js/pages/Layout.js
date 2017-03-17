import React from "react";
import ReactDOM from "react-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";

export default class Layout extends React.Component {

  //main pada js
  render() {
    return(
      <div>
        <body class="hold-transition skin-blue layout-top-nav">
        <div class="wrapper">
        <Header/>

           {this.props.children}

        <Footer/>
        </div>
        </body>
      </div>
    )
  }
}
