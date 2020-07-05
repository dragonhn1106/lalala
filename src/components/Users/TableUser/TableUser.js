import React, { Component } from "react";
import "./TableUser.css";
import TableUserAll from "./TableUserAll/TableUserAll";
import { Route } from "react-router-dom";
import TableUserDepartment from "./TableUserDepartment/TableUserDepartment";
import { withRouter } from "react-router";
import UserInfoContent from '../UserInfoContent/UserInfoContent';

class TableUser extends Component {

  render() {
    return (
      <div className="TableUser">
        <Route
          path={`${this.props.match.path}/`}
          exact
          component={TableUserAll}
        />

        <Route
          path={`${this.props.match.path}/info/:name`}
          exact
          component={TableUserDepartment}
        />
        <Route
          path={`${this.props.match.path}/info/:name/:userid`}
          component={UserInfoContent}
        />
      </div>
    );
  }
}

export default withRouter(TableUser);
