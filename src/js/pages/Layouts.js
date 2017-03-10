import React from "react";
import ReactDOM from "react-dom";

export default class Layouts extends React.Component {

  //main pada js
  render() {
    return(

      <div>
        {this.props.children}
      </div>
    )
  }
}
