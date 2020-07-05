import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiSwapVertical } from "@mdi/js";
import "./RecentDocument.css";
import TableDocumentRow from "../TableDocumentRow/TableDocumentRow";

class RecentDocument extends Component {
  render() {
    return (
      <div className="RecentDocument">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center" style={{verticalAlign: 'unset'}}>
                  <label className="TableDocumentRow_container" style={{marginBottom: '10px'}}>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </th>
                <th>Loại</th>
                <th>
                  <span className="pr-2">Tên tài liệu</span>
                  <Icon path={mdiSwapVertical} size={1} />
                </th>
                <th>
                  <span className="pr-2">Nơi lưu trữ</span>
                  <Icon path={mdiSwapVertical} size={1} />
                </th>
                <th>
                  <span className="pr-2">Ngày tạo</span>
                  <Icon path={mdiSwapVertical} size={1} />
                </th>
                <th>
                  <span className="pr-2">Người tạo</span>
                  <Icon path={mdiSwapVertical} size={1} />
                </th>
                <th>Kích thước</th>
              </tr>
            </thead>
            <tbody>
              <TableDocumentRow
                type="pdf"
                title="thiet-ke-bao-gia.pdf"
                category="Phân tích nghiệp vụ"
                dateCreated="31/07/2019"
                userCreated={require("../../../assets/user1.jpg")}
                size="3.29 MB"
              />
              <TableDocumentRow
                type="word"
                title="hop-dong-vtask2-v2.pdf"
                category="Thông tin dự án"
                dateCreated="31/07/2019"
                userCreated={require("../../../assets/user1.jpg")}
                size="3.29 MB"
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RecentDocument;
