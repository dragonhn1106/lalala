import React, { Component } from "react";
import userava from "../../../assets/user1.jpg";
import { mdiCircleMedium } from "@mdi/js";
import "./HomeJobItem.css";
import { Icon } from "@mdi/react";
import ProgressCircle from "../../common/ProgressCircle/ProgressCircle";

class HomeJobItem extends Component {
  render() {
    return (
      <div className="HomeJobItem d-flex align-items-center">
        <img src={userava} alt="" width="40" height="40" className="rounded-circle" />
        <div className="flex-fill">
          <div className="pl-2">
            <span><strong>Công việc thiết kế giao diện </strong></span>
            <div className="text-danger">
              <Icon path={mdiCircleMedium} size={1} color="red"/>
              &nbsp;Còn 1 ngày
            </div>
          </div>
        </div>
        <div className="progress-circle">
          <ProgressCircle />
        </div>
      </div>
    );
  }
}

export default HomeJobItem;
