import React, { Component } from "react";
import ModelLeft from "./ModelLeft/ModelLeft";
import ModelRight from "./ModelRight/ModelRight";

export default class Center extends Component {
  render() {
    return (
      <div className="row mt-5 ">
        <div className="col-6">
          <ModelLeft/>
        </div>
        <div className="col-6">
          <ModelRight changeGlasses={this.props.changeGlasses} />
        </div>
      </div>
    );
  }
}
