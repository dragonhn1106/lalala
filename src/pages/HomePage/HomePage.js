import React, { Component } from "react";
import HomeNews from "../../components/Home/HomeNews/HomeNews";
import HomeJob from "../../components/Home/HomeJob/HomeJob";
import HomeRemind from "../../components/Home/HomeRemind/HomeRemind";
import "./HomePage.css";

class HomePage extends Component {
  componentDidMount() {
    document.title = "Vtask - phần mềm quản lý công việc";
  }
  render() {
    return (
      <div className="HomePage d-sm-flex align-items-stretch">
        <HomeNews />
        <HomeJob />
        <HomeRemind />
      </div>
    );
  }
}

export default HomePage;
