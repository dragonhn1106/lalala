import React, { Component } from "react";
import "./ProgressBar.css";

class ProgressBar extends Component {
  render() {
    return (
      <div className="ProgressBar d-flex">
        <div
          className="progress-line mr-1"
          style={{ "--progressbar-percent": `${this.props.percent}%` }}
        ></div>
        <p className="m-0">
          <small>{this.props.percent}%</small>
        </p>
      </div>
    );
  }
}

export default ProgressBar;
