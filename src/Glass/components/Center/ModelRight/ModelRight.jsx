import React, { Component } from "react";
import "./ModelRight.css";
export default class ModelRight extends Component {
  render() {
    const { changeGlasses } = this.props;
    console.log("changeGlasses", changeGlasses);
    return (
      <div className="">
        <div className="ModelRight-item mx-auto" style={{ width: "50%" }}>
          <img
            style={{ width: "100%" }}
            src="./img/glassesImage/model.jpg"
            alt="Model"
          />
          <img
            className="ModelRight-glasses"
            src={changeGlasses.url}
            alt="123"
          />
          <div className="ModelRight-desc p-2">
            <p className="text-primary mb-1">{changeGlasses.name}</p>
            <p className="text-white m-0">{changeGlasses.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
