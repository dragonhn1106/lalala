import React, { Component } from "react";
import routes from "../routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftCol from "../components/common/LeftCol/LeftCol";
import TopNav from "../components/common/TopNav/TopNav";
import MainContent from '../components/common/MainContent/MainContent';

class MyLayout extends Component {
  configRoute(routes) {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }
  render() {
    return (
      <Router>
        <div className="main_container">
          <LeftCol />
          <TopNav />
          <MainContent>{this.configRoute(routes)}</MainContent>
        </div>
      </Router>
    );
  }
}

export default MyLayout;
