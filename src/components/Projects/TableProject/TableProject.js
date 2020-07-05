import React, { Component } from "react";
import Icon from "@mdi/react";
import {
  mdiSwapVertical,
  mdiAccountOutline,
  mdiSettingsOutline
} from "@mdi/js";
import { List, arrayMove } from "react-movable";
import userAva from "../../../assets/user1.jpg";
import "./TableProject.css";
// import RowProject from "../RowProject/RowProject";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
import {
  mdiStar,
  mdiMagnify,
  mdiFilterOutline,
  mdiDownload,
  mdiTimetable,
  mdiFullscreen,
  mdiDragVertical,
  mdiPlus,
  mdiDotsVertical
} from "@mdi/js";
import CustomToggle from "../../common/CustomToggle/CustomToggle";
import { Dropdown } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";

const tableStyles = {
  background: "#eaebec",
  borderSpacing: 0
};

const thStyles = {
  borderBottom: "2px solid #ddd",
  padding: "5px 10px",
  background: "#ededed",
  color: "#666",
  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif'
};

const tdStyles = width => ({
  borderBottom: "1px solid #ddd",
  color: "#666",
  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
  padding: "5px 10px",
  width
});

const buttonStyles = {
  border: "none",
  margin: 0,
  padding: 0,
  width: "auto",
  overflow: "visible",
  cursor: "pointer",
  background: "transparent"
};

class TableProject extends Component {
  state = {
    showProject: false,
    items: [
      {
        id: 1,
        avatar: userAva,
        projectName: "Phân tích ứng dụng đặt tua lịch tự động",
        status: "Quá hạn",
        statusColor: "text-danger",
        statusDays: "4",
        percent: 50,
        daysToComplete: 250,
        rateOfProgress: "02/10/2018-16/08/2019",
        priority: "Thấp",
        priorityStatus: "badge-info",
        isHover: false
      },
      {
        id: 2,
        avatar: userAva,
        projectName: "Phân tích ứng dụng đặt tua lịch tự động",
        status: "Quá hạn",
        statusColor: "text-danger",
        statusDays: "4",
        percent: 70,
        daysToComplete: 150,
        rateOfProgress: "02/10/2018-16/08/2019",
        priority: "Cao",
        priorityStatus: "badge-danger",
        isHover: false
      },
      {
        id: 3,
        avatar: userAva,
        projectName: "Phân tích ứng dụng đặt tua lịch tự động",
        status: "Quá hạn",
        statusColor: "text-danger",
        statusDays: "4",
        percent: 70,
        daysToComplete: 150,
        rateOfProgress: "02/10/2018-16/08/2019",
        priority: "Trung bình",
        priorityStatus: "badge-warning",
        isHover: false
      }
    ]
  };

  showProjectModal = () => {
    this.setState({ showProject: true });
  };
  closeProjectModal = () => {
    this.setState({ showProject: false });
  };

  handleMouseHover = id => {
    const item = this.state.items.find(item => item.id === id);
    item.isHover = !item.isHover;
    this.setState({
      ...this.state,
      item
    });
  };

  render() {
    return (
      <div className="TableProject">
        <div className="MainRight__action d-sm-flex justify-content-between align-items-center">
          <div className="ml-3 mb-2">
            <Icon path={mdiStar} size={1} color="#31b586" />
            <strong className="ml-2 text-green">Tất cả </strong>
          </div>

          <div className="d-sm-flex align-items-center">
            <ul className="nav">
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
              <li className="nav-item">
                <a
                  href="/"
                  className="d-block h-100 d-flex flex-column align-items-center justify-content-center"
                >
                  <div>
                    <Icon path={mdiFilterOutline} size={1} />
                  </div>

                  <div className="mt-1">HOẠT ĐỘNG</div>
                </a>
              </li>
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
                    <Icon path={mdiTimetable} size={1} />
                  </div>

                  <div className="mt-1">NĂM 2019</div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/"
                  className="d-block h-100 d-flex flex-column align-items-center justify-content-center"
                >
                  <div>
                    <Icon path={mdiFullscreen} size={1} />
                  </div>

                  <div className="mt-1">MỞ RỘNG</div>
                </a>
              </li>
              <li className="nav-item">
                <Dropdown className="d-block h-100 d-flex flex-column align-items-center justify-content-center">
                  <Dropdown.Toggle as={CustomToggle}>
                    <Icon path={mdiDotsVertical} size={1} />
                    <div>THÊM</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/">Cài đặt bảng</Dropdown.Item>
                    <Dropdown.Item href="#/">Thùng rác</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
            <button
              className="btn btn-warning mr-3"
              onClick={this.showProjectModal}
            >
              + &nbsp;Tạo dự án
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <List
            beforeDrag={({ elements, index }) => {
              const cells = Array.from(elements[index].children);
              const widths = cells.map(
                cell => window.getComputedStyle(cell).width
              );
              this.setState({ widths });
            }}
            values={this.state.items}
            onChange={({ oldIndex, newIndex }) =>
              this.setState(prevState => ({
                items: arrayMove(prevState.items, oldIndex, newIndex)
              }))
            }
            renderList={({ children, props, isDragged }) => (
              <table
                style={{
                  ...tableStyles,
                  cursor: isDragged ? "grabbing" : undefined
                }}
              >
                <thead>
                  <tr>
                    <th style={{ ...thStyles }} className="text-center">
                      <div style={{ marginLeft: "18px" }}>
                        <Icon path={mdiDragVertical} size={1} />
                      </div>
                    </th>
                    <th style={thStyles}>Dự án</th>
                    <th style={thStyles}>
                      Trạng thái
                      <span className="ml-2">
                        <Icon path={mdiSwapVertical} size={1} />
                      </span>
                    </th>
                    <th style={thStyles} className="text-center">
                      Hoàn thành
                      <span className="ml-2">
                        <Icon path={mdiSwapVertical} size={1} />
                      </span>
                    </th>
                    <th style={thStyles} className="text-center">
                      Tiến độ
                      <span className="ml-2">
                        <Icon path={mdiSwapVertical} size={1} />
                      </span>
                    </th>
                    <th style={thStyles} className="text-center">
                      Ưu tiên
                      <span className="ml-2">
                        <Icon path={mdiSwapVertical} size={1} />
                      </span>
                    </th>
                    <th className="text-center" style={thStyles}>
                      <Icon path={mdiAccountOutline} size={1} />
                    </th>
                    <th className="text-center" style={thStyles}>
                      <Icon path={mdiSettingsOutline} size={0.7} />
                    </th>
                  </tr>
                </thead>
                <tbody {...props}>{children}</tbody>
              </table>
            )}
            renderItem={({ value, props, isDragged, isSelected }) => {
              const widths = isDragged ? this.state.widths : [];
              const row = (
                <tr
                  {...props}
                  style={{
                    ...props.style,
                    cursor: isDragged ? "grabbing" : "inherit",
                    backgroundColor:
                      isDragged || isSelected ? "#EEE" : "#fafafa"
                  }}
                >
                  <td
                    className="text-right"
                    style={tdStyles(widths[0])}
                    onMouseEnter={() => this.handleMouseHover(value.id)}
                    onMouseLeave={() => this.handleMouseHover(value.id)}
                  >
                    <button
                      data-movable-handle
                      style={{
                        ...buttonStyles,
                        cursor: isDragged ? "grabbing" : "grab"
                      }}
                      tabIndex={-1}
                    >
                      {value.isHover ? (
                        <div className="mr-2">
                          <Icon path={mdiDragVertical} size={1} />
                        </div>
                      ) : (
                        <img
                          src={value.avatar}
                          alt=""
                          className="RowProject__avatar"
                        />
                      )}
                    </button>
                  </td>
                  <td style={tdStyles(widths[1])}>{value.projectName}</td>
                  <td style={tdStyles(widths[2])}>
                    <div className="d-flex flex-column justify-content-center">
                      <div className={value.statusColor}>
                        <span className="mr-1">
                          <i className="fa fa-circle" aria-hidden="true" />
                        </span>
                        <span>{value.status}</span>
                      </div>
                      <p className="date-time  ml-4">
                        <small>{value.statusDays} ngày</small>
                      </p>
                    </div>
                  </td>
                  <td className="progress-col" style={tdStyles(widths[3])}>
                    <ProgressBar percent={value.percent} />
                  </td>
                  <td style={tdStyles(widths[4])} className="text-center">
                    <div className="d-flex flex-column">
                      <p className="text-orange m-0">
                        {value.daysToComplete} ngày
                      </p>
                      <p className="date m-0">
                        <small>{value.rateOfProgress}</small>
                      </p>
                    </div>
                  </td>
                  <td style={tdStyles(widths[5])} className="text-center">
                    <span
                      className={[
                        "badge",
                        "badge-pill",
                        value.priorityStatus
                      ].join(" ")}
                    >
                      {value.priority}
                    </span>
                  </td>
                  <td style={tdStyles(widths[6])}>
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
                  <td className="text-center" style={tdStyles(widths[7])}>
                    <a href="/">
                      <Icon path={mdiDotsVertical} size={1} />
                    </a>
                  </td>
                </tr>
              );
              return isDragged ? (
                <table style={{ ...props.style, borderSpacing: 0 }}>
                  <tbody>{row}</tbody>
                </table>
              ) : (
                row
              );
            }}
          />

          {/* Modal add project  */}
          <Modal show={this.state.showProject} onHide={this.closeProjectModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeProjectModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.closeProjectModal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default TableProject;
