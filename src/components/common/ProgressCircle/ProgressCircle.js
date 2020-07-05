import React, { Component } from "react";
import "./ProgressCircle.css";

class ProgressCircle extends Component {
  render() {
    return (
      <div className="ProgressCircle">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill"></div>
            </div>
            <div className="mask half">
              <div className="fill"></div>
            </div>
            <div className="inside-circle"> 70% </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressCircle;
