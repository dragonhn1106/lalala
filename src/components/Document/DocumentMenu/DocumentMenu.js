import React, { Component } from "react";
import "./DocumentMenu.css";
import DocumentMenuItem from "../DocumentMenuItem/DocumentMenuItem";
import Icon from "@mdi/react";
import {
  mdiClockOutline,
  mdiDipSwitch,
  mdiFileMoveOutline,
  mdiFileUndoOutline,
  mdiFolderOpen,
  mdiGoogleDrive,
  mdiTrashCanOutline
} from "@mdi/js";

class DocumentMenu extends Component {
  render() {
    return (
      <div className="DocumentMenu">
        <div className="Document__header d-flex flex-column justify-content-center text-center">
          <h1>QUẢN LÝ TÀI LIỆU</h1>
        </div>
        <div className="Document__header2"></div>
        <div className="list-doc">
          <DocumentMenuItem
            title="Gần đây"
            icon={<Icon path={mdiClockOutline} size={1.5} />}
            url="gan-day"
          />
          <DocumentMenuItem
            title="Tài liệu dự án"
            icon={<Icon path={mdiDipSwitch} size={1.5} />}
            url="tai-lieu-du-an"
          />
          <DocumentMenuItem
            title="Đã chia sẻ"
            icon={<Icon path={mdiFileMoveOutline} size={1.5} />}
            url="da-chia-se"
          />
          <DocumentMenuItem
            title="Được chia sẻ với tôi"
            icon={<Icon path={mdiFileUndoOutline} size={1.5} />}
            url="duoc-chia-se-voi-toi"
          />
          <DocumentMenuItem
            title="Tài liệu của tôi"
            icon={<Icon path={mdiFolderOpen} size={1.5} color="#d8be17"/>}
            url="tai-lieu-cua-toi"
          />
          <DocumentMenuItem
            title="Google Driver"
            icon={<Icon path={mdiGoogleDrive} size={1.5} color="#2196F3" />}
            url="google-driver"
          />
          <DocumentMenuItem
            title="Thùng rác"
            icon={<Icon path={mdiTrashCanOutline} size={1.5} />}
            url="thung-rac"
          />
        </div>
      </div>
    );
  }
}

export default DocumentMenu;
