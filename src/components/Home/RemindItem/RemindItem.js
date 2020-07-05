import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "../../common/CustomToggle/CustomToggle";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";
import "./RemindItem.css";

class RemindItem extends Component {
  render() {
    return (
      <div className="RemindItem d-flex">
        <div className="d-flex RemindItem--border">
          <div>
            <p>
              Tham gia buổi họp báo với khách hàng về dự án chung cư cao tầng.
              Chuẩn bị tài liệu đầy đủ
            </p>
            <span className="text-orange">
              Nhắc tôi 1 lần lúc 08:30 ngày 18/06/2019
            </span>
          </div>
          <div className="RemindItem-dropdown">
            <Dropdown drop="left">
              <Dropdown.Toggle as={CustomToggle}>
                <Icon path={mdiDotsVertical} size={1} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/">Bỏ ghim</Dropdown.Item>
                <Dropdown.Item href="#/">Ghim đầu bảng</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default RemindItem;
