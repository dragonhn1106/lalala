import React, { Component } from "react";
import "./DepartmentUser.css";

class DepartmentUser extends Component {
  render() {
    return (
      <div className="DepartmentUser">
        <div className="DepartmentUser d-flex flex-row align-items-center">
          <img alt="dep-ic" src={this.props.avatar} width="45" />
          <div>
            <div>
              <strong>{this.props.name}</strong>
            </div>
            <div className="text-green">
              <span>
                {this.props.countOfStaff}
              </span>
              <span >&nbsp;thành viên</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DepartmentUser;
