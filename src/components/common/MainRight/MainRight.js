import React, { Component } from "react";
import "./MainRight.css";
import TableProject from "../../Projects/TableProject/TableProject";
import TableUser from "../../Users/TableUser/TableUser";
import TableDocument from "../../Document/TableDocument/TableDocument";
import { withRouter } from "react-router";
import TableJob from '../../Jobs/TableJob/TableJob';

class MainRight extends Component {
  render() {
    const { match } = this.props;
    const renderMainRight = () => {
      if (match.path === "/du-an") {
        return <TableProject />;
      } else if (match.path === "/thanh-vien") {
        return <TableUser />;
      } else if (match.path === "/tai-lieu") {
        return <TableDocument />;
      } else if (match.path === "/cong-viec") {
        return <TableJob />;
      } else {
        return null;
      }
    };

    return <div className="MainRight">{renderMainRight()}</div>;
  }
}

export default withRouter(MainRight);
