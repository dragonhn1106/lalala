import React, { Component } from "react";
import "./TableDocumentRow.css";
import pdfIc from "../../../assets/icon_pdf.png";
import wordIc from "../../../assets/icon_word.png";
import imgIc from "../../../assets/icon_img.png";

class TableDocumentRow extends Component {
  renderImage() {
    if (this.props.type === "pdf") {
      return <img alt="pdf-ic" src={pdfIc} />;
    } else if (this.props.type === "word") {
      return <img alt="pdf-ic" src={wordIc} />;
    } else {
      return <img alt="pdf-ic" src={imgIc} />;
    }
  }
  render() {
    return (
      <tr className="TableDocumentRow">
        <td className="text-center">
          <label className="TableDocumentRow_container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </td>
        <td>{this.renderImage()}</td>
        <td className="TableDocumentRow_title text-primary">
          {this.props.title}
        </td>
        <td className="TableDocumentRow text-primary">{this.props.category}</td>
        <td>{this.props.dateCreated}</td>
        <td>
          <img
            alt="user-created"
            src={this.props.userCreated}
            className="rounded-circle ml-4"
          />
        </td>
        <td>{this.props.size}</td>
      </tr>
    );
  }
}

export default TableDocumentRow;
