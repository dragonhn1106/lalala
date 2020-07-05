import React, { Component } from "react";
import { withRouter } from "react-router";
import { mdiChevronLeft, mdiDragVertical } from "@mdi/js";
import { Icon } from "@mdi/react";
import "./UserInfo.css";
import { Link } from "react-router-dom";
import SearchIcon from "../../../assets/search-ic.jpg";
import { List } from "react-movable";
import depIc from "../../../assets/dep-ic.png";
import { connect } from "react-redux";
import { dragUserInDepartment, getUserInDepartment } from "../../../actions";

class UserInfo extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.name);
    const { name } = this.props.match.params;
    this.props.getUserInDepartment(name);
  }
  render() {
    return (
      <div className="UserInfo">
        <div className="DepartmentInfo__header d-flex align-items-center">
          <Link to="/thanh-vien">
            <Icon path={mdiChevronLeft} size={1.7} /> DANH SÁCH THÀNH VIÊN
          </Link>
        </div>
        <div className="search mb-3">
          <input
            name="search-job"
            type="text"
            className="form-control"
            placeholder="Tìm thành viên"
            style={{ backgroundImage: `url(${SearchIcon})` }}
          />
        </div>
        <div className="UserInfo__listUser">
          <List
            values={this.props.departmentReducer.usersInDepartment}
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
                  padding: "8px 15px"
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
                    <Link
                      to={`/thanh-vien/info/${this.props.match.params.name}/${value.id}`}
                    >
                      <div>
                        <strong>{value.name}</strong>
                      </div>
                      <div>{value.department}</div>
                    </Link>
                  </div>
                </div>
              </li>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    departmentReducer: state.departmentReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDrag: (oldIndex, newIndex) =>
      dispatch(dragUserInDepartment(oldIndex, newIndex)),
    getUserInDepartment: name => dispatch(getUserInDepartment(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserInfo));
