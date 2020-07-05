import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Icon from "@mdi/react";
import {
  mdiDragVertical,
  mdiDotsVertical,
  mdiStar,
  mdiRotateRight,
  mdiCheckCircleOutline,
  mdiAccountArrowRight
} from "@mdi/js";
import { withRouter } from "react-router";
import CustomToggle from "../../common/CustomToggle/CustomToggle";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RowUser.css";

const Row = styled.tr`
  background-color: ${props => (props.isDragging ? "#ccc" : "white")};
`;

class RowUser extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.user.id} index={this.props.index}>
        {(provider, snapshot) => (
          <React.Fragment>
            <Row
              className="RowUser"
              {...provider.draggableProps}
              ref={provider.innerRef}
              isDragging={snapshot.isDragging}
            >
              <td className="avatar-hover">
                <span {...provider.dragHandleProps}>
                  <Icon path={mdiDragVertical} size={1} />
                </span>
                <img
                  src={this.props.user.avatar}
                  className="rounded-circle"
                  alt=""
                  width="35"
                />
              </td>
              <td>
                <Link
                  to={`${this.props.match.url}/info/${this.props.department.id}/${this.props.user.id}`}
                >
                  {this.props.user.name}
                </Link>
              </td>
              <td>{this.props.user.position}</td>
              <td className="text-warning">{this.props.user.birthday}</td>
              <td className="text-warning">{this.props.user.gender}</td>
              <td className="text-primary">{this.props.user.email}</td>
              <td>{this.props.user.phone}</td>
              <td style={{ color: this.props.user.roleColor }}>
                {this.props.user.isAdmin ? (
                  <Icon path={mdiStar} size={0.8} color="#f5ba08" />
                ) : null}
                &nbsp;
                {this.props.user.role}
              </td>
              <td className="text-right" style={{ width: "80px" }}>
                <span
                  className="badge"
                  style={{
                    backgroundColor: this.props.user.statusBGColor,
                    color: "#fff",
                    fontWeight: "normal"
                  }}
                >
                  {this.props.user.status}
                </span>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle as={CustomToggle} drop="left">
                    <Icon path={mdiDotsVertical} size={1} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu drop="left">
                    <Dropdown.Item href="#/action-1">
                      <Icon path={mdiRotateRight} size={1} /> &nbsp;Chuyển trạng
                      thái public
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <Icon path={mdiCheckCircleOutline} size={1} /> &nbsp;Phân
                      quyền
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <Icon path={mdiAccountArrowRight} size={1} /> &nbsp;{" "}
                      <span className="text-danger"> Rời nhóm</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </Row>
          </React.Fragment>
        )}
      </Draggable>
    );
  }
}

export default withRouter(RowUser);
