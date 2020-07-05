import React, { Component } from "react";
import depIc from "../../../assets/dep-ic.png";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import "./ListProjectGroup.css";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { List } from "react-movable";
import { dragProjectGroup } from "../../../actions";
import { mdiDragVertical } from "@mdi/js";

class ListProjectGroup extends Component {
  state = {
    showDepartment: false,
    showIcon: false
  };
  showDepartmentModal = e => {
    e.preventDefault();
    this.setState({ showDepartment: true });
  };
  closeDepartmentModal = () => {
    this.setState({ showDepartment: false });
  };
  showIconModal = e => {
    e.preventDefault();
    this.setState({ showDepartment: false, showIcon: true });
  };
  closeIconModal = () => {
    this.setState({ showIcon: false });
  };

  render() {
    return (
      <div className="ListProjectGroup">
        <div className="ListProjectGroup__header">
          <span>NHÓM DỰ ÁN</span>
          <a
            href="/"
            className="none-decoration pull-right"
            onClick={this.showDepartmentModal}
          >
            <Icon path={mdiPlus} size={1.2} />
          </a>
        </div>
        <div className="mainleft__header2 gray-bg">
          <strong>Tất cả</strong> &nbsp;<small>(21 dự án)</small>
        </div>

        {/* List Department  */}

        <List
          values={this.props.projectGroupReducer.projectGroup}
          onChange={({ oldIndex, newIndex }) =>
            this.props.onDrag(oldIndex, newIndex)
          }
          renderList={({ children, props, isDragged }) => (
            <ul
              {...props}
              style={{
                padding: "0em 0em 1em 0em",
                cursor: isDragged ? "grabbing" : "inherit"
              }}
              className="p-0 m-0"
            >
              {children}
            </ul>
          )}
          renderItem={({ value, props, isDragged, isSelected }) => (
            <li
              {...props}
              style={{
                ...props.style,
                listStyleType: "none",
                cursor: isDragged ? "grabbing" : "inherit",
                backgroundColor: isDragged || isSelected ? "#EEE" : "#FFF",
                padding: "8px 15px",
              }}
              className="department-icon not-outline-focus"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <span
                  data-movable-handle
                  style={{
                    cursor: isDragged ? "grabbing" : "grab"
                  }}
                  tabIndex={-1}
                >
                  <Icon path={mdiDragVertical} size={1} />
                </span>
                <img
                  alt="dep-ic"
                  className="dep-ic"
                  src={depIc}
                  width="45"
                  height="45"
                />
                <div className="ml-3">
                  {value.name} <small>({value.projectCount} dự án)</small>
                </div>
              </div>
            </li>
          )}
        />
        <div
          style={{
            padding: "8px 15px"
          }}
          className="department-icon"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <span style={{ visibility: "hidden" }}>
              <Icon path={mdiDragVertical} size={1} />
            </span>
            <img
              alt="dep-ic"
              className="dep-ic"
              src={depIc}
              width="45"
              height="45"
            />
            <div className="ml-3">
              Nhóm mặc định <small>(30 dự án)</small>
            </div>
          </div>
        </div>

        {/* Modal Add  Department */}
        <Modal
          show={this.state.showDepartment}
          onHide={this.closeDepartmentModal}
        >
          <Modal.Header closeButton>
            <span>Tạo nhóm dự án</span>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group mt-3">
              <div className="label d-flex justify-content-between">
                <label>Tên nhóm dự án</label>
                <i className="text-danger">(Tối đa 150 ký tự)</i>
              </div>
              <input type="text" className="form-control input-modal" />
            </div>
            <div className="form-group mt-5">
              <div className="label d-flex justify-content-between">
                <label>Mô tả nhóm dự án</label>
                <i className="text-danger">(Tối đa 150 ký tự)</i>
              </div>
              <input type="text" className="form-control input-modal" />
            </div>
            <div className="form-group d-flex justify-content-between mb-5">
              <div>
                <p>Biểu tượng nhóm</p>
                <a href="/" onClick={this.showIconModal}>
                  Thay đổi
                </a>
              </div>
              <img src={require("../../../assets/dep-ic.png")} alt="icon" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="submit-modal">HOÀN THÀNH</button>
          </Modal.Footer>
        </Modal>

        {/* Modal select department icon */}
        <Modal
          show={this.state.showIcon}
          onHide={this.closeIconModal}
          size="sm"
        >
          <Modal.Header closeButton>
            <span>Chọn biểu tượng</span>
          </Modal.Header>
          <Modal.Body>
            <span>Chọn biểu tượng có sẵn</span>
            <div className="d-flex flex-wrap icon-block">
              <div className="items-ic">
                <img src={require("../../../assets/dep-ic.png")} alt="" />
                <div className="text-center">
                  <input
                    className=""
                    type="radio"
                    name="icon-selected"
                    defaultChecked
                  />
                </div>
              </div>
              <div className="items-ic">
                <img src={require("../../../assets/dep-ic.png")} alt="" />
                <div className="text-center">
                  <input className="" type="radio" name="icon-selected" />
                </div>
              </div>
              <div className="items-ic">
                <img src={require("../../../assets/dep-ic.png")} alt="" />
                <div className="text-center">
                  <input className="" type="radio" name="icon-selected" />
                </div>
              </div>
              <div className="items-ic">
                <img src={require("../../../assets/dep-ic.png")} alt="" />
                <div className="text-center">
                  <input className="" type="radio" name="icon-selected" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-md-between mt-2">
              <span>Biểu tượng có sẵn</span>
              <a href="/">
                <small>+ Thêm mới</small>
              </a>
            </div>
            <div className="d-flex flex-wrap">
              <div className="items-ic">
                <img src={require("../../../assets/dep-ic.png")} alt="" />
                <div className="text-center">
                  <input className="" type="radio" />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="submit-modal">HOÀN THÀNH</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projectGroupReducer: state.projectGroupReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDrag: (oldIndex, newIndex) =>
      dispatch(dragProjectGroup(oldIndex, newIndex))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProjectGroup);
