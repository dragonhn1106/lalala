import React, { Component } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import RowUser from "../RowUser/RowUser";

const UserList = styled.tbody`
  background-color: ${props => (props.isDragingOver ? "#ccc" : "white")};
  transition background-color 0.2s ease;
`;

class GroupUserByDepartment extends Component {
  state = {
    toogleChild: false
  };

  toogleChild = () => {
    this.setState((prevState, props) => ({
      toogleChild: !prevState.toogleChild
    }));
  };

  showChild = () => {
    if (!this.state.toogleChild) {
      return this.props.users.map((user, index) => (
        <RowUser
          key={user.id}
          user={user}
          index={index}
          department={this.props.department}
        />
      ));
    }
  };
  render() {
    return (
      <Droppable droppableId={this.props.department.id}>
        {(provider, snapshot) => (
          <UserList
            {...provider.droppableProps}
            ref={provider.innerRef}
            isDragingOver={snapshot.isDraggingOver}
          >
            <tr className="department-name">
              <td colSpan="10">
                <i
                  className={`fa ${
                    this.state.toogleChild ? "fa-caret-up" : "fa-caret-down"
                  }`}
                  aria-hidden="true"
                  onClick={this.toogleChild}
                  style={{ cursor: "pointer" }}
                ></i>
                <span className="ml-5">{this.props.department.name}</span>
              </td>
            </tr>
            {this.showChild()}

            {provider.placeholder}
          </UserList>
        )}
      </Droppable>
    );
  }
}

export default GroupUserByDepartment;
