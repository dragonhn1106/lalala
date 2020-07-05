import React, { Component } from "react";
import "./MainLeft.css";
import ListProjectGroup from "../../Departments/ListProjectGroup/ListProjectGroup";
import { withRouter } from "react-router";
import ListDepartmentUser from "../../Departments/ListDepartmentUser/ListDepartmentUser";
import DocumentMenu from "../../Document/DocumentMenu/DocumentMenu";
// import JobInformationLeft from "../../Jobs/JobInformationLeft/JobInformationLeft";
import DepartmentInfo from "../../Departments/DepartmentInfo/DepartmentInfo";
import { Route } from "react-router-dom";
import UserInfo from "../../Departments/UserInfo/UserInfo";
import AddUser from "../../Users/AddUser/AddUser";
import JobMainLeft from "../../Jobs/JobMainLeft/JobMainLeft";

class MainLeft extends Component {
  render() {
    const { match } = this.props;
    const renderMainLeft = () => {
      if (match.path === "/du-an") {
        return <ListProjectGroup />;
      } else if (match.path === "/thanh-vien") {
        if (match.isExact) {
          return <ListDepartmentUser />;
        } else {
          return (
            <React.Fragment>
              <Route
                path={`${match.path}/info/:id`}
                exact
                component={DepartmentInfo}
              />
              <Route
                path={`${match.path}/add-user`}
                component={AddUser}
              />
              <Route
                path={`${match.path}/info/:name/:userid`}
                component={UserInfo}
              />
              <Route path={`/add-user`} component={AddUser} />
            </React.Fragment>
          );
        }
      } else if (match.path === "/tai-lieu") {
        return <DocumentMenu />;
      } else if (match.path === "/cong-viec") {
        return <JobMainLeft />;
      } else {
        return null;
      }
    };
    return <div className="MainLeft">{renderMainLeft()}</div>;
  }
}

export default withRouter(MainLeft);
