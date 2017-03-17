import React from "react";
import ReactDOM from "react-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";
import Style from "../component/library/Style";
import Js from "../component/library/Js";

export default class Layout extends React.Component {

  //main pada js
  render() {
    return(
      <div>
        <head>
          <meta charset="utf-8"></meta>
          <title>PTPSystem</title>
          <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"></meta>

          <Style/>
          <Js/>


        </head>
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
