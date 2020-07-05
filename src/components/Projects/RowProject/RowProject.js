import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiDragVertical, mdiPlus, mdiDotsVertical } from "@mdi/js";
import "./RowProject.css";
import ProgressBar from "../../common/ProgressBar/ProgressBar";

class RowProject extends Component {
  state = {
    isHovering: false
  };

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = state => {
    return {
      isHovering: !state.isHovering
    };
  };

  render() {
    return (
      <tr className="RowProject">
        <td
          className="text-right"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {this.state.isHovering ? (
            <Icon path={mdiDragVertical} size={1} />
          ) : null}

          <img src={this.props.avatar} alt="" className="RowProject__avatar" />
        </td>
        <td>{this.props.projectName}</td>
        <td>
          <div className="d-flex flex-column justify-content-center">
            <div className={this.props.statusColor}>
              <span className="mr-1">
                <i className="fa fa-circle" aria-hidden="true" />
              </span>
              <span>{this.props.status}</span>
            </div>
            <p className="date-time  ml-4">
              <small>{this.props.statusDays} ngày</small>
            </p>
          </div>
        </td>
        <td className="progress-col">
          <ProgressBar percent={this.props.percent} />
        </td>
        <td>
          <div className="d-flex flex-column">
            <p className="text-orange m-0">{this.props.daysToComplete} ngày</p>
            <p className="date m-0">
              <small>{this.props.rateOfProgress}</small>
            </p>
          </div>
        </td>
        <td>
          <span
            className={["badge", "badge-pill", this.props.priorityStatus].join(" ")}
          >
            Thấp
          </span>
        </td>
        <td>
          <div className="tong-so-nguoi-tham-gia d-flex justify-content-center">
            <div className="user-n">
              <img
                src={require("../../../assets/user1.jpg")}
                width="30%"
                alt=""
              />
            </div>
            <div className="user-n">
              <img
                src={require("../../../assets/user1.jpg")}
                width="30%"
                alt=""
              />
            </div>
            <div className="user-n">
              <div className="m-0 user-count">9</div>
            </div>
            <div>
              <a
                href="/"
                className="add-user-plus d-flex justify-content-center align-items-center"
              >
                <Icon path={mdiPlus} size={1} color="#b3aeae" />
              </a>
            </div>
          </div>
        </td>
        <td className="text-center">
          <a href="/">
            <Icon path={mdiDotsVertical} size={1} />
          </a>
        </td>
      </tr>
    );
  }
}

export default RowProject;
