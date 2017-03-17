import React from "react";
import ReactDOM from "react-dom";

export default class Js extends React.Component {


  //main pada js
  render() {

    return(
      <div>
      <script src="static/plugins/jQuery/jquery-2.2.3.min.js"></script>
      <script src="static/bootstrap/js/bootstrap.min.js"></script>
      <script src="static/plugins/slimScroll/jquery.slimscroll.min.js"></script>
      <script src="static/plugins/fastclick/fastclick.js"></script>
      <script src="static/dist/js/app.min.js"></script>
      <script src="static/dist/js/demo.js"></script>
      </div>
    )
  }
}
