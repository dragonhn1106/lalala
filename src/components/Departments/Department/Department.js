import React, { Component } from "react";
import depIc from "../../../assets/dep-ic.png";
import "./Department.css";

class Department extends Component {
  render() {
    return (
      <a href="/" className="Department d-flex flex-row align-items-center">
        <img alt="dep-ic" className="dep-ic" src={depIc} width="45" />
        <div className="pl-3">
          <span>{this.props.name}</span> &nbsp;<small>({this.props.projectCount} dự án) </small>
        </div>
      </a>
    );
  }
}

export default Department;
