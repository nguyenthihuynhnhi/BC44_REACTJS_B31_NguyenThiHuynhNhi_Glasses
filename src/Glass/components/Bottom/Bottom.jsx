import React, { Component } from "react";
import "./Bottom.css";

export default class Bottom extends Component {
  renderDataBaseGlasses = () => {
    const { handleChangeGlasses, dataBaseGlasses } = this.props;

    const result = dataBaseGlasses.map((item) => {
      return (
        <div key={item.id} style={{ width: "15%" }} className="p-3">
          <img
            onClick={() => {
              handleChangeGlasses(item.id);
            }}
            className="bottom-class"
            style={{ width: "100%", height: "100%", cursor: "pointer" }}
            src={item.url}
            alt=""
          />
        </div>
      );
    });

    return result;
  };

  render() {
    return (
      <div className="bg-light p-5 mt-5 row rounded">
        {this.renderDataBaseGlasses()}
      </div>
    );
  }
}
