import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiMagnify,mdiGoogleAssistant } from "@mdi/js";
import "./HomeNews.css";
import HomeNewsItem from "../HomeNewsItem/HomeNewsItem";

class HomeNews extends Component {
  render() {
    return (
      <div className="HomeNews">
        <div className="HomeNews__Header">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Icon path={mdiGoogleAssistant} size={1.8} color="#ff630f"/>
              <span className="HomeNews__Header__Title ml-3">
                Bảng tin nội bộ
              </span>
            </div>
            <div className="HomeNews__Header__Icon d-flex flex-column justify-content-between">
              <Icon path={mdiMagnify} size={1.3} color="#6c757d" />
            </div>
          </div>
        </div>
        <div className="HomeNews__Content">
          <HomeNewsItem />
          <HomeNewsItem />
          <HomeNewsItem />
        </div>
      </div>
    );
  }
}

export default HomeNews;
