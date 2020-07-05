import React, { Component } from "react";
import Icon from "@mdi/react";
import {
  mdiApps,
  mdiTimerSand,
  mdiWhiteBalanceSunny,
  mdiAlertOutline
} from "@mdi/js";
import "./HomeJob.css";
import HomeJobItem from "../HomeJobItem/HomeJobItem";

class HomeJob extends Component {
  render() {
    return (
      <div className="HomeJob">
        <div className="HomeJob__header d-flex">
          <a
            href="/"
            className="HomeJobMenuItem d-flex flex-column align-items-center"
          >
            <div className="HomeJobMenuItem_icon greenbg d-flex justify-content-center align-items-center">
              <Icon path={mdiApps} size={1.5} color="#fff" />
            </div>

            <div>Tất cả</div>
          </a>
          <a
            href="/"
            className="HomeJobMenuItem d-flex flex-column align-items-center"
          >
            <div className="HomeJobMenuItem_icon orangebg d-flex justify-content-center align-items-center">
              <Icon path={mdiWhiteBalanceSunny} size={1.5} color="#fff" />
            </div>

            <div>Đến hạn</div>
          </a>
          <a
            href="/"
            className="HomeJobMenuItem d-flex flex-column align-items-center"
          >
            <div className="HomeJobMenuItem_icon redbg d-flex justify-content-center align-items-center">
              <Icon path={mdiAlertOutline} size={1.5} color="#fff" />
            </div>

            <div>Quá hạn</div>
          </a>
          <a
            href="/"
            className="HomeJobMenuItem d-flex flex-column align-items-center"
          >
            <div className="HomeJobMenuItem_icon greybg d-flex justify-content-center align-items-center">
              <Icon path={mdiTimerSand} size={1.5} color="#fff" />
            </div>

            <div>Đang chờ</div>
          </a>
        </div>
        <div className="HomeJob__group">
          <div className="HomeJob__group__title">Công việc đến hạn</div>
          <div className="HomeJobList">
            <HomeJobItem />
            <HomeJobItem />
            <HomeJobItem />
          </div>
        </div>
        <div className="HomeJob__group mt-4">
          <div className="HomeJob__group__title">Công việc quá hạn</div>
          <div className="HomeJobList">
            <HomeJobItem />
            <HomeJobItem />
            <HomeJobItem />
          </div>
        </div>
        <div className="HomeJob__group mt-4">
          <div className="HomeJob__group__title">Công việc đang chờ</div>
          <span>Không có !</span>
        </div>
      </div>
    );
  }
}

export default HomeJob;
