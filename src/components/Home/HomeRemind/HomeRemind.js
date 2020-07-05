import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiAlarmMultiple, mdiPlus } from "@mdi/js";
import "./HomeRemind.css";
import RemindItem from "../RemindItem/RemindItem";
import { Modal, Button } from "react-bootstrap";

class HomeRemind extends Component {
  state = {
    showRemindModal: false
  };

  showRemindModal = e => {
    e.preventDefault();
    this.setState({ showRemindModal: true });
  };

  closeRemindModal = () => {
    this.setState({ showRemindModal: false });
  };

  render() {
    return (
      <div className="HomeRemind">
        <div className="HomeRemind__Header d-flex justify-content-between">
          <div>
            <Icon path={mdiAlarmMultiple} size={1.5} />
            <span className="MainRemid--Name pl-2">NHẮC VIỆC CỦA BẠN</span>
          </div>
          <div>
            <a href="#/" onClick={this.showRemindModal}>
              <Icon path={mdiPlus} size={1.5} color="#000" />
            </a>
          </div>
        </div>
        <div className="HomeRemind__Body">
          <div className="RemindList">
            <RemindItem />
            <RemindItem />
          </div>
        </div>
        <Modal show={this.state.showRemindModal} onHide={this.closeRemindModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeRemindModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.closeRemindModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default HomeRemind;
