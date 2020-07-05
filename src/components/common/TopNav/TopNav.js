import React, { Component } from "react";
import "./TopNav.css";
import Icon from "@mdi/react";
import depIc from "../../../assets/dep-ic.png";
import {
  mdiChevronDown,
  mdiMessageTextOutline,
  mdiBellOutline
} from "@mdi/js";
import SearchIcon from "../../../assets/search-ic.jpg";

class TopNav extends Component {
  render() {
    return <div className="TopNav">
      <div className="pull-left pl-3 pt-2 TopNav--Items d-flex">
        <span className="TopNav--Information">
          <div className="">
            HungThanhXD
            <span className="TopNav--Information-event ml-2">Pro</span>
          </div>
          <div>
            <span className="text-green">huuthanhxd@gmail.com</span>
            <Icon path={mdiChevronDown} size={1} />
          </div>
        </span>
        <div className="search ml-4 pt-1">
          {/* <input name="search-job" type="text" className="form-control" placeholder="Tìm công việc" style={{backgroundImage: `url(require('../../../assets/search-ic.jpg'))`}}/> */}
          <input
            name="search-job"
            type="text"
            className="form-control"
            placeholder="Tìm nhanh công việc"
            style={{ backgroundImage: `url(${SearchIcon})` }}
          />
        </div>
      </div>
      <div className="pull-right TopNav--Right pt-3 pr-3">
        <span className="pr-3">
          <Icon path={mdiMessageTextOutline} size={1.2} color={''} />
        </span>
        <span className="pr-3">
          <Icon path={mdiBellOutline} size={1.2} />
        </span>
        <span>
          <span className="pr-3">
            <img alt="dep-ic" className="dep-ic" src={depIc} width="30" />
          </span>
          <span>Nguyen Huu Thanh</span>
          <Icon path={mdiChevronDown} size={1} />
        </span>
      </div>
    </div>;
  }
}

export default TopNav;
