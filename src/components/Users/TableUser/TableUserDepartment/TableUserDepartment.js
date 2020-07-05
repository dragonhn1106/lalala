import React, { Component } from "react";
import { withRouter } from "react-router";
import TableUserAction from "../TableUserAction/TableUserAction";
import { List, arrayMove } from "react-movable";
import Icon from "@mdi/react";
import userAva from "../../../../assets/user1.jpg";
import CustomToggle from "../../../common/CustomToggle/CustomToggle";
import { Dropdown } from "react-bootstrap";
import {
  mdiDragVertical,
  mdiDotsVertical,
  mdiCursorMove,
  mdiStar,
  mdiRotateRight,
  mdiCheckCircleOutline,
  mdiAccountArrowRight
} from "@mdi/js";
import "./TableUserDepartment.css";
import { Link } from "react-router-dom";

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

const tdStyles = (width, roleColor) => ({
  borderBottom: "1px solid #ddd",
  color: roleColor ? roleColor : "#666",
  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
  padding: "5px 10px",
  height: "50px",
  verticalAlign: "middle",
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

class TableUserDepartment extends Component {
  state = {
    showProject: false,
    items: [
      {
        id: "user-1",
        avatar: userAva,
        name: "Nguyen Van D",
        dateOfBirth: "23/11/2001",
        email: "nguyenvand@vtask.vn",
        position: "Chuyên viên",
        gender: "Nam",
        phone: "01678.321.123",
        role: "Chủ nhóm",
        roleColor: "red",
        status: "public",
        statusBGColor: "green",
        isAdmin: 1
      },
      {
        id: "user-2",
        avatar: userAva,
        name: "Nguyen Van D",
        dateOfBirth: "23/11/2001",
        email: "nguyenvand@vtask.vn",
        position: "Chuyên viên",
        gender: "Nam",
        phone: "01678.321.123",
        role: "Thành viên",
        roleColor: "green",
        status: "public",
        statusBGColor: "green",
        isAdmin: 0
      },
      {
        id: "user-3",
        avatar: userAva,
        name: "Nguyen Van D",
        dateOfBirth: "23/11/2001",
        email: "nguyenvand@vtask.vn",
        position: "Chuyên viên",
        gender: "Nam",
        phone: "01678.321.123",
        role: "Thành viên",
        roleColor: "green",
        status: "public",
        statusBGColor: "green",
        isAdmin: 0
      }
    ]
  };
  render() {
    // console.log(this.props.match.params);

    return (
      <div className="TableUserDepartment">
        <TableUserAction title="Ban giám đốc">5 thành viên</TableUserAction>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch"
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
                      <div>
                        <span>
                          <Icon path={mdiCursorMove} size={1} />
                        </span>
                      </div>
                    </th>
                    <th style={thStyles}>Họ tên</th>
                    <th style={thStyles}>Chức danh</th>
                    <th style={thStyles}>Năm sinh</th>
                    <th style={thStyles}>Giới tính</th>
                    <th style={thStyles}>Email</th>
                    <th style={thStyles}>Điện thoại</th>
                    <th style={thStyles}>Vai trò</th>
                    <th style={thStyles}>Trạng thái</th>
                    <th className="text-center" style={thStyles}></th>
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
                    className="text-center TableUserDepartment_dragbtn"
                    style={tdStyles(widths[0])}
                  >
                    <button
                      data-movable-handle
                      style={{
                        ...buttonStyles,
                        cursor: isDragged ? "grabbing" : "grab"
                      }}
                      tabIndex={-1}
                    >
                      <div className="mr-2 TableUserDepartment__dragIcon">
                        <Icon path={mdiDragVertical} size={1} />
                      </div>
                    </button>
                    <img
                      src={value.avatar}
                      alt=""
                      className="TableUserDepartment__avatar"
                    />
                  </td>
                  <td style={tdStyles(widths[1])}>
                    <Link to={`${this.props.match.url}/${value.id}`}>
                      {value.name}
                    </Link>
                  </td>
                  <td style={tdStyles(widths[2])}>{value.position}</td>
                  <td style={tdStyles(widths[3])} className="text-warning">
                    {value.dateOfBirth}
                  </td>
                  <td style={tdStyles(widths[4])} className="text-warning">
                    {value.gender}
                  </td>
                  <td style={tdStyles(widths[5])} className="text-primary">
                    {value.email}
                  </td>
                  <td style={tdStyles(widths[6])}>{value.phone}</td>
                  <td style={tdStyles(widths[7], value.roleColor)}>
                    {value.isAdmin ? (
                      <Icon path={mdiStar} size={0.8} color="#f5ba08" />
                    ) : null}
                    &nbsp; {value.role}
                  </td>
                  <td style={tdStyles("80px")} className="text-right">
                    <span
                      className="badge"
                      style={{
                        backgroundColor: value.statusBGColor,
                        color: "#fff",
                        fontWeight: "normal"
                      }}
                    >
                      {value.status}
                    </span>
                  </td>

                  <td className="text-center" style={tdStyles(widths[7])}>
                    <Dropdown drop="left">
                      <Dropdown.Toggle as={CustomToggle} drop="left">
                        <Icon path={mdiDotsVertical} size={1} />
                      </Dropdown.Toggle>

                      <Dropdown.Menu drop="left">
                        <Dropdown.Item href="#/action-1">
                          <Icon path={mdiRotateRight} size={1} /> &nbsp;Chuyển
                          trạng thái public
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          <Icon path={mdiCheckCircleOutline} size={1} />{" "}
                          &nbsp;Phân quyền
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          <Icon path={mdiAccountArrowRight} size={1} /> &nbsp;{" "}
                          <span className="text-danger"> Rời nhóm</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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
        </div>
      </div>
    );
  }
}

export default withRouter(TableUserDepartment);
