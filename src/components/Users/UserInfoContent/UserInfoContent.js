import React, { Component } from "react";
import "./UserInfoContent.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getUserDetail } from "../../../actions";

class UserInfoContent extends Component {
  onUploadProfile = e => {
    e.preventDefault();
  };
  componentDidMount() {
    const { userid } = this.props.match.params;
    this.props.getUserDetail(userid);
  }

  UNSAFE_componentWillReceiveProps(prevProps, newProps) {
    const { userid } = this.props.match.params;
    if (prevProps.match.params.userid !== userid) {
      this.props.getUserDetail(prevProps.match.params.userid);
    }
  }
  render() {
    return (
      <div className="UserInfoContent">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7 has-border-right UserInfoContent-left">
              <div className="UserInfoContent__header d-flex justify-content-between">
                <div className="d-flex">
                  <img
                    src={this.props.user.avatar}
                    alt=""
                    width="40"
                    height="40"
                    className="rounded-circle"
                  />
                  <div className="ml-3">
                    <span className="UserInfoContent__header__name text-green">
                      {this.props.user.name}
                    </span>
                    <div>Ngày tham gia: {this.props.user.date_join}</div>
                  </div>
                </div>
                <div>
                  <button className="btn-rounded">Chỉnh sửa</button>
                </div>
              </div>
              <div className="UserInfoContent__row d-flex justify-content-between mt-4">
                <span>Phòng/ban</span>
                <span>
                  <strong>Phòng tài chính kế toán</strong>
                </span>
              </div>
              <div className="UserInfoContent__row d-flex justify-content-between">
                <span>Chức danh</span>
                <span>
                  <strong>Trưởng phòng</strong>
                </span>
              </div>
              <div className="UserInfoContent__row d-flex justify-content-between">
                <span>Trình độ</span>
                <span>
                  <strong>Đại học</strong>
                </span>
              </div>
              <div className="UserInfoContent__row d-flex justify-content-between">
                <span>Chuyên ngành</span>
                <span>
                  <strong>Kinh tế quốc tế</strong>
                </span>
              </div>
              <div className="UserInfoContent__desc mt-3">
                <div className="UserInfoContent__desc__header">
                  <strong>Mô tả công việc:</strong>
                </div>
                <p>
                  Kế toán trưởng là một chức danh nghề nghiệp bổ nhiệm cho các
                  chuyên gia kế toán có trình độ chuyên môn cao, có phẩm chất
                  đạo đức tốt và có năng lực điều hành, tôt được công tác kế
                  toán trong đơn vị hạch toán cơ sở độc lập.
                </p>
                <p>
                  Trong các công ty, doanh nghiệp, tổ chức kinh doanh, kế toán
                  trưởng luôn đứng dưới, làm việc dưới quyền giám đốc tài chính
                </p>
              </div>

              <div className="user-profile mb-2">
                <img
                  src={require("../../../assets/icon_word.png")}
                  width={25}
                  alt=""
                />
                <span className="ml-3">
                  <strong>XEM FILE HỒ SƠ </strong>
                </span>
              </div>
              <a href="/" onClick={this.onUploadProfile}>
                + Upload file hồ sơ
              </a>
            </div>

            <div className="col-sm-5 m-0 p-0">
              <div className="UserInfo_right">
                <div className="UserInfo_right_header d-flex justify-content-center align-items-center">
                  <h1>THÔNG TIN CÁ NHÂN</h1>
                </div>
                <div className="UserInfo_right_centent p-3">
                  <div className="UserInfo_right_centent__group">
                    <div className="title">Họ và tên đầy đủ</div>
                    <label className="group_label">Lê Trần Lệ Thủy</label>
                  </div>
                  <div className="UserInfo_right_centent__group">
                    <div className="title">Ngày sinh</div>
                    <label className="group_label">20/01/1978</label>
                  </div>
                  <div className="UserInfo_right_centent__group">
                    <div className="title">Giới tính</div>
                    <label className="group_label">{this.props.user.gender ? 'Nam' : 'Nữ'}</label>
                  </div>
                  <div className="UserInfo_right_centent__group">
                    <div className="title">Email</div>
                    <label className="group_label">
                      {this.props.user.email}
                    </label>
                  </div>
                  <div className="UserInfo_right_centent__group">
                    <div className="title">
                      <div>Điện thoại</div>k
                      <label className="group_label">0918254254</label>
                    </div>
                    <div className="UserInfo_right_centent__group">
                      <div className="title">Địa chỉ</div>
                      <label className="group_label">
                        Thôn Đình Văn, Xã Tam Giao, huyện Tam Mao, Tỉnh Tam Điệp
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetail: user_id => dispatch(getUserDetail(user_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserInfoContent));
