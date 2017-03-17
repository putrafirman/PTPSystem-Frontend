import React from "react";
import ReactDOM from "react-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";

export default class Layout extends React.Component {

  //main pada js
  render() {
    return(
      <div>
        <head>
          <meta charset="utf-8"></meta>
          <title>PTPSystem</title>
          <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"></meta>

          <link rel="stylesheet" href="static/bootstrap/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"/>
          <link rel="stylesheet" href="static/dist/css/skins/skin-blue.css"/>
          <link rel="stylesheet" href="static/dist/css/AdminLTE.min.css"/>
          <link rel="stylesheet" href="static/mylib/css/newLayout.css"/>

          <script src="static/plugins/jQuery/jquery-2.2.3.min.js"></script>
          <script src="static/bootstrap/js/bootstrap.min.js"></script>
          <script src="static/plugins/slimScroll/jquery.slimscroll.min.js"></script>
          <script src="static/plugins/fastclick/fastclick.js"></script>
          <script src="static/dist/js/app.min.js"></script>
          <script src="static/dist/js/demo.js"></script>
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
