import React, { Component } from "react";
import "./DepartmentInfo.css";
import { withRouter } from "react-router";
import { mdiChevronLeft } from "@mdi/js";
import { Icon } from "@mdi/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteDepartment, getDepartmentDetail } from "../../../actions";
import { Redirect } from "react-router-dom";

class DepartmentInfo extends Component {
  state = {
    deleteSuccess: 0
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDepartmentDetail(id);
  }

  onDeleteDepartment = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    this.props.deleteDepartment(id);
    this.setState({
      deleteSuccess: 1
    });
  };
  render() {
    if (this.props.departmentReducer.done === 1) {
      return <Redirect to="/thanh-vien" />;
    }
    const {
      name,
      description,
      icon,
      number_member
    } = this.props.departmentReducer.department;
    return (
      <div className="DepartmentInfo">
        <div className="DepartmentInfo__header d-flex align-items-center">
          <Link to="/thanh-vien">
            <Icon path={mdiChevronLeft} size={1.7} /> CHI TIẾT PHÒNG BAN
          </Link>
        </div>
        <div className="DepartmentInfo__image text-center pt-3">
          <img
            src={icon}
            alt=""
            width="60"
            height="60"
            className="rounded-circle"
          />
          <h5>{name}</h5>
          <span>Số nhân sự: {number_member} thành viên</span>
        </div>
        <div className="description">
          <h5>Giới thiệu</h5>
          <p>{description}</p>
        </div>
        <div className="bottom-action">
          <ul className="list-unstyled">
            <li>
              <a href="/">Chỉnh sửa</a>
            </li>
            <li>
              <a href="/" onClick={this.onDeleteDepartment}>
                Xóa Bộ phận
              </a>
            </li>
          </ul>
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
    getDepartmentDetail: id => dispatch(getDepartmentDetail(id)),
    deleteDepartment: id => dispatch(deleteDepartment(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DepartmentInfo));
