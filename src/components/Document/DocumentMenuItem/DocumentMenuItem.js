import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DocumentMenuItem.css";
import { withRouter } from "react-router";

class DocumentMenuItem extends Component {
  render() {
    return (
      <Link
        className="DocumentMenuItem d-flex flex-row align-items-center"
        to={`${this.props.match.url}/${this.props.url}`}
      >
        <span className="DocumentMenuItem--ic">{this.props.icon}</span>

        <div>
          <div>
            <span className="DocumentMenuItem--title">{this.props.title}</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default withRouter(DocumentMenuItem);
