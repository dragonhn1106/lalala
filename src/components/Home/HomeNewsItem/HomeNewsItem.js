import React, { Component } from "react";
import depIc from "../../../assets/user1.jpg";
import "./HomeNewsItem.css";
import { Icon } from "@mdi/react";
import {
  mdiDotsVertical,
  mdiBullhorn,
  mdiArrowRight,
  mdiCommentProcessingOutline
} from "@mdi/js";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "../../common/CustomToggle/CustomToggle";

class HomeNewsItem extends Component {
  render() {
    return (
      <div className="HomeNewsItems">
        <div className="d-flex">
          <div className="icon-left">
            <img src={depIc} alt="" width="40" className="rounded-circle" />
          </div>
          <div className="HomeNewsItemsRight">
            <div className="d-flex justify-content-between">
              <span className="news_item_name">Nguyễn Hữu Thành </span>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} drop="left">
                  <Icon path={mdiDotsVertical} size={1} />
                </Dropdown.Toggle>

                <Dropdown.Menu drop="left">
                  <Dropdown.Item href="#/action-1">Bỏ ghim</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Ghim đầu bảng</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="home_news_from d-flex">
              <span
                style={{
                  borderRadius: "100%",
                  width: "15px",
                  height: "15px",
                  backgroundColor: "rgb(231, 153, 7)",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex"
                }}
              >
                <Icon path={mdiBullhorn} size={0.5} color="#fff" />
              </span>
              <span className="ml-2">Đã ghim thông báo mức độ</span> &nbsp;
              <span className="text-warning">Quan trọng</span>
              <span className="ml-3">2 tháng trước</span>
            </div>
            <div className="home_news_desc">
              <p>
                Admin Dept. has received claims about some staffs played games
                in Open Air area in working time recently. By this email, we
                would like to confirm about playing time in Open Air area as
                follows
              </p>
            </div>
            <div className="hone_news_comment d-flex justify-content-between">
              <div className="hone_news_comment__left d-flex">
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
                </div>
                <div className="ml-4 comment-wrapper">
                  <Icon path={mdiCommentProcessingOutline} size={1} />
                  <span className="comment-count">2</span>
                </div>
                <span className="ml-2">30 phản hồi</span>
              </div>
              <div className="home_news_comment_right">
                <a href="/">
                  Chi tiết <Icon path={mdiArrowRight} size={0.8} color="#007bff"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeNewsItem;
