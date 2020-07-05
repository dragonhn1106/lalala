import React, { Component } from "react";
import Icon from "@mdi/react";
import {
  mdiMagnify,
  mdiDownload,
  mdiTrashCanOutline,
  mdiUpload,
  mdiClockOutline
} from "@mdi/js";
import { Route } from "react-router-dom";
import "./TableDocument.css";
import { withRouter } from "react-router";
import RecentDocument from "../RecentDocument/RecentDocument";
import DocumentForProject from "../DocumentForProject/DocumentForProject";
import DocumentShared from "../DocumentShared/DocumentShared";
import DocumentShareToMe from "../DocumentShareToMe/DocumentShareToMe";
import MyDocument from "../MyDocument/MyDocument";
import GoogleDriver from "../GoogleDriver/GoogleDriver";
import DocumentDeleted from "../DocumentDeleted/DocumentDeleted";

class TableDocument extends Component {
  state = {
    headerTitle: "Tài liệu gần đây"
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const pathName = nextProps.location.pathname;
    if (pathName.includes("/tai-lieu-du-an")) {
      this.setState({
        headerTitle: "Tài liệu dự án"
      });
    } else if (pathName.includes("/da-chia-se")) {
      this.setState({
        headerTitle: "Đã chia sẻ"
      });
    } else if (pathName.includes("/duoc-chia-se-voi-toi")) {
      this.setState({
        headerTitle: "Được chia sẻ với tôi"
      });
    } else if (pathName.includes("/tai-lieu-cua-toi")) {
      this.setState({
        headerTitle: "Tài liệu của tôi"
      });
    } else if (pathName.includes("/google-driver")) {
      this.setState({
        headerTitle: "Google driver"
      });
    } else if (pathName.includes("/thung-rac")) {
      this.setState({
        headerTitle: "Thùng rác"
      });
    } else {
      this.setState({
        headerTitle: "Tài liệu gần đây"
      });
    }
  }

  render() {
    return (
      <div className="TableDocument">
        <div className="MainRight__action d-sm-flex justify-content-between align-items-center">
          <div className="ml-3 mb-2 d-flex">
            <Icon path={mdiClockOutline} size={1} color="#31b586" />
            <div>
              <div>
                <strong className="ml-2 text-green">
                  {this.state.headerTitle}{" "}
                </strong>
              </div>
            </div>
          </div>

          <div className="d-sm-flex align-items-center">
            <ul className="nav">
              <li className="nav-item">
                <a
                  href="/"
                  className="d-block h-100 d-flex flex-column align-items-center justify-content-center"
                >
                  <div>
                    <Icon path={mdiDownload} size={1} />
                  </div>

                  <div className="mt-1">TẢI XUỐNG</div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/"
                  className="d-block h-100 d-flex flex-column align-items-center justify-content-center"
                >
                  <div>
                    <Icon path={mdiTrashCanOutline} size={1} />
                  </div>

                  <div className="mt-1">XÓA</div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/"
                  className="d-block h-100 d-flex flex-column align-items-center justify-content-center"
                >
                  <div>
                    <Icon path={mdiMagnify} size={1} />
                  </div>

                  <div className="mt-1">TÌM KIẾM</div>
                </a>
              </li>
            </ul>
            <button className="btn btn-warning mr-3">
              <Icon path={mdiUpload} size={1} color="#fff" />
              &nbsp;TẢI LÊN
            </button>
          </div>
        </div>
        <Route
          path={`${this.props.match.path}/`}
          exact
          component={RecentDocument}
        />
        <Route
          path={`${this.props.match.path}/gan-day`}
          exact={true}
          component={RecentDocument}
        />
        <Route
          path={`${this.props.match.path}/tai-lieu-du-an`}
          component={DocumentForProject}
        />
        <Route
          path={`${this.props.match.path}/da-chia-se`}
          component={DocumentShared}
        />
        <Route
          path={`${this.props.match.path}/duoc-chia-se-voi-toi`}
          component={DocumentShareToMe}
        />
        <Route
          path={`${this.props.match.path}/tai-lieu-cua-toi`}
          component={MyDocument}
        />
        <Route
          path={`${this.props.match.path}/google-driver`}
          component={GoogleDriver}
        />
        <Route
          path={`${this.props.match.path}/thung-rac`}
          component={DocumentDeleted}
        />
      </div>
    );
  }
}

export default withRouter(TableDocument);
