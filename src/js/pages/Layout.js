import React from "react";
import ReactDOM from "react-dom";

export default class Layout2 extends React.Component {

  //main pada js
  render() {
    return(

      <div>
        {this.props.children}
      </div>
    )
  }
}
