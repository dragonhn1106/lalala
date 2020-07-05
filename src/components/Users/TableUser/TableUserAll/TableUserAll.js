import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Icon from "@mdi/react";
import { mdiCursorMove } from "@mdi/js";
import GroupUserByDepartment from "../../GroupUserByDepartment/GroupUserByDepartment";
import { connect } from "react-redux";
import { dragUser, getUserAll } from "../../../../actions";
import TableUserAction from "../TableUserAction/TableUserAction";

class TableUserAll extends Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    this.props.getUserAll();
  }

  onDragEnd = result => {
    const { destination, source } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    this.props.dragUser(result);
  };
  render() {
    return (
      <React.Fragment>
        <TableUserAction title="Danh sách nhân sự">
          Đã thêm <span className="text-danger">1820</span> thành viên
          <span className="text-info">(nâng cấp)</span>
        </TableUserAction>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <td className="text-center">
                  <span>
                    <Icon path={mdiCursorMove} size={1} />
                  </span>
                </td>
                <td>Họ và tên</td>
                <td>Chức danh</td>
                <td>Năm sinh</td>
                <td>Giới tính</td>
                <td>Email</td>
                <td>Điện thoại</td>
                <td>Vai trò</td>
                <td className="text-right" style={{ width: "80px" }}>
                  Trạng thái
                </td>
                <td></td>
              </tr>
            </thead>

            <DragDropContext onDragEnd={this.onDragEnd}>
              {this.props.userReducer.departmentOrder.map(departmentId => {
                const department = this.props.userReducer.departments[
                  departmentId
                ];
                const users = department.userIds.map(
                  userId => this.props.userReducer.users[userId]
                );

                return (
                  <GroupUserByDepartment
                    key={department.id}
                    department={department}
                    users={users}
                  ></GroupUserByDepartment>
                );
              })}
            </DragDropContext>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dragUser: result => dispatch(dragUser(result)),
    getUserAll: () => dispatch(getUserAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableUserAll);
