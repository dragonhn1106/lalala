import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiPlus, mdiDrag } from "@mdi/js";
import SearchIcon from "../../../assets/search-ic.jpg";
import "./ListDepartmentUser.css";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { List } from "react-movable";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
  dragDepartment,
  createIcon,
  getIcon,
  selectIcon,
  getDepartment,
  createDepartment
} from "../../../actions";
import { mdiDragVertical } from "@mdi/js";
import depIc from "../../../assets/dep-ic.png";

class ListDepartmentUser extends Component {
  state = {
    showDepartment: false,
    showIcon: false,
    name: "",
    description: ""
  };

  componentDidMount() {
    this.props.getDepartment();
  }

  onSubmitCreateDepartment = () => {
    if (this.props.iconReducer.iconSelected == null) {
      alert("Bạn chưa chọn icon");
      return;
    }
    const name = this.state.name;
    const description = this.state.description;
    const icon = this.props.iconReducer.iconSelected.url_sort;
    this.props.createDepartment(name, icon, description);
    this.setState({
      showDepartment: false
    });
  };

  handleChangeFile = event => {
    const icon = document.getElementById("icFile").files[0];
    this.props.onCreateIcon(icon);
  };

  showIconSelected() {
    if (this.props.iconReducer.iconSelected) {
      return (
        <img
          src={this.props.iconReducer.iconSelected.url_full}
          alt="icon"
          width="60"
          height="60"
        />
      );
    }
  }
  choseIcon = (e, item) => {
    e.preventDefault();
    this.props.onSelectIcon(item);
  };

  triggerInputOpen(e) {
    e.preventDefault();
    document.getElementById("icFile").click();
  }
  showDepartmentModal = e => {
    e.preventDefault();
    this.setState({ showDepartment: true });
  };
  showIconModal = e => {
    e.preventDefault();
    this.setState({ showIcon: true, showDepartment: false });
    this.props.onGetIcon();
  };
  closeDepartmentModal = () => {
    this.setState({ showDepartment: false });
  };
  closeIconModal = () => {
    this.setState({ showIcon: false });
  };
  showPreview() {
    if (this.props.iconReducer.iconUploaded) {
      return (
        <a
          href="/"
          className="ic-item"
          onClick={e =>
            this.choseIcon(
              e,
              this.props.iconReducer.iconUploaded.id,
              this.props.iconReducer.iconUploaded.url_full
            )
          }
        >
          <img src={this.props.iconReducer.iconUploaded.url} alt="icon" />
        </a>
      );
    }
  }

  onChangeDepartmentName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangeDepartmentDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  onUpdateNewIcon = () => {
    if (this.props.iconReducer.iconSelected === null) {
      alert("Bạn chưa chọn Icon");
      return;
    }
    this.props.onGetIcon();
    this.setState({
      showIcon: false,
      showDepartment: true
    });
  };
  render() {
    return (
      <div className="ListDepartmentUser">
        <div className="ListDepartmentUser__header">
          <Icon path={mdiDrag} size={1.3} />
          &nbsp;<span>DANH SÁCH BỘ PHẬN</span>
          <a
            href="/"
            className="none-decoration pull-right"
            onClick={this.showDepartmentModal}
          >
            <Icon path={mdiPlus} size={1.2} />
          </a>
        </div>
        <div className="search mb-3">
          {/* <input name="search-job" type="text" className="form-control" placeholder="Tìm công việc" style={{backgroundImage: `url(require('../../../assets/search-ic.jpg'))`}}/> */}
          <input
            name="search-job"
            type="text"
            className="form-control"
            placeholder="Tìm công việc"
            style={{ backgroundImage: `url(${SearchIcon})` }}
          />
        </div>

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
            <div style={{ paddingLeft: "20px" }}>
              <img alt="dep-ic" className="dep-ic" src={depIc} width="45" height="45"/>
            </div>

            <div className="ml-1" style={{ cursor: "pointer" }}>
              <div className="department_name">
                <strong>Tất cả</strong>
              </div>
              <small className="text-success">100 Thành viên</small>
            </div>
          </div>
        </div>
        <List
          values={this.props.departmentReducer.departments}
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
                <div>
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
                    src={value.icon}
                    width="45"
                    height="45"
                  />
                </div>

                <Link
                  className="ml-2 d-block none-decoration"
                  to={`${this.props.match.url}/info/${value.id}`}
                >
                  <div className="department_name">
                    <strong>{value.name}</strong>
                  </div>
                  <small className="text-success">
                    {value.members} Thành viên
                  </small>
                </Link>

                {/* <div className="ml-1" style={{ cursor: "pointer" }}>
                  <div className="department_name">
                    <strong>{value.name}</strong>
                  </div>
                  <small className="text-success">
                    {value.members} Thành viên
                  </small>
                </div> */}
              </div>
            </li>
          )}
        />

       
        {/* Modal Add  Department */}
        <Modal
          show={this.state.showDepartment}
          onHide={this.closeDepartmentModal}
        >
          <Modal.Header closeButton>
            <span>Tạo bộ phận</span>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group mt-3">
              <div className="label d-flex justify-content-between">
                <label>Tên bộ phận</label>
                <i className="text-danger">(Tối đa 150 ký tự)</i>
              </div>
              <input
                type="text"
                className="form-control input-modal"
                onChange={this.onChangeDepartmentName}
                value={this.state.name}
              />
            </div>
            <div className="form-group mt-5">
              <div className="label d-flex justify-content-between">
                <label>Mô tả bộ phận</label>
                <i className="text-danger">(Tối đa 150 ký tự)</i>
              </div>
              <input
                type="text"
                className="form-control input-modal"
                onChange={this.onChangeDepartmentDescription}
                value={this.state.description}
              />
            </div>
            <div className="form-group d-flex justify-content-between mb-3">
              <div>
                <p>Biểu tượng </p>
                <a href="/" onClick={this.showIconModal}>
                  + Chọn biểu tượng
                </a>
              </div>
              {this.showIconSelected()}
            </div>
            <div className="form-group mb-5">
              <div>
                <p>Thành viên</p>
                <a href="/" onClick={this.showIconModal}>
                  + Thêm thành viên
                </a>
              </div>
              <div className="d-flex mt-2">
                <img
                  src={require("../../../assets/user1.jpg")}
                  alt=""
                  className="rounded-circle ml-2"
                  width="40"
                />
                <img
                  src={require("../../../assets/user1.jpg")}
                  alt=""
                  className="rounded-circle ml-2"
                  width="40"
                />
                <img
                  src={require("../../../assets/user1.jpg")}
                  alt=""
                  className="rounded-circle ml-2"
                  width="40"
                />
                <img
                  src={require("../../../assets/user1.jpg")}
                  alt=""
                  className="rounded-circle ml-2"
                  width="40"
                />
                <img
                  src={require("../../../assets/user1.jpg")}
                  alt=""
                  className="rounded-circle ml-2"
                  width="40"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="submit-modal"
              onClick={this.onSubmitCreateDepartment}
            >
              HOÀN THÀNH
            </button>
          </Modal.Footer>
        </Modal>
        {/* Modal Add  Icon */}
        <Modal
          show={this.state.showIcon}
          onHide={this.closeIconModal}
          size="sm"
        >
          <Modal.Header closeButton>
            <span>Quản lý biểu tượng</span>
          </Modal.Header>
          <Modal.Body>
            <div className="modalAddIcon">
              <p>Biểu tượng </p>
              <div className="ic-wrapper">
                {this.props.iconReducer.iconList.map(item => {
                  return (
                    <a
                      href="/"
                      className="ic-item"
                      key={item.id}
                      onClick={e => this.choseIcon(e, item)}
                    >
                      <img src={item.url_full} alt="icon" />
                    </a>
                  );
                })}
              </div>
              <div className="d-flex justify-content-between">
                <span>Biểu tượng tải lên </span>
                <a href="/" onClick={this.triggerInputOpen}>
                  + Thêm mới
                </a>
                <input
                  type="file"
                  onChange={this.handleChangeFile}
                  className="input-ic"
                  id="icFile"
                />
              </div>
              <div className="mt-2 mb-4">{this.showPreview()}</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="submit-modal" onClick={this.onUpdateNewIcon}>
              HOÀN THÀNH
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    departmentReducer: state.departmentReducer,
    iconReducer: state.iconReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDrag: (oldIndex, newIndex) =>
      dispatch(dragDepartment(oldIndex, newIndex)),
    onCreateIcon: file => dispatch(createIcon(file)),
    onGetIcon: () => dispatch(getIcon()),
    onSelectIcon: item => dispatch(selectIcon(item)),
    getDepartment: () => dispatch(getDepartment()),
    createDepartment: (name, icon, description) =>
      dispatch(createDepartment(name, icon, description))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListDepartmentUser));
