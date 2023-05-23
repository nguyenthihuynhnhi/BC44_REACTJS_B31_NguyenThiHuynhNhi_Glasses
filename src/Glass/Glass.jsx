import React, { Component } from "react";
import Top from "./components/Top/Top";
import Bottom from "./components/Bottom/Bottom";
import Center from "./components/Center/Center";
import dataBaseGlasses from "./dataGlasses.json";

export default class Glass extends Component {
  state = {
    dataBaseGlasses,
    changeGlasses: dataBaseGlasses[0],
  };
  handleChangeGlasses = (id) => {
    this.setState({
      changeGlasses: dataBaseGlasses[id-1],
    });
    // console.log(id);
  };
  render() {
    return (
      <div>
        <Top />
        <div className="container">
          <Center changeGlasses={this.state.changeGlasses} />
          <Bottom
            handleChangeGlasses={this.handleChangeGlasses}
            dataBaseGlasses={this.state.dataBaseGlasses}
          />
        </div>
      </div>
    );
  }
}
