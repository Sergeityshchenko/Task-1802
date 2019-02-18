import React, { Component } from "react";
import "./App.css";
import Example from "./Example/Example";
import Example2 from "./Example2/Example2";
import Gradient from "./Gradient/Gradient";

class App extends Component {
  state = {
    title: "Hello World",
    color1: "#000000",
    color2: "#ffffff"
  };

  changeTitle = newTitle => {
    this.setState({ title: newTitle });
  }

  changeColor1 = color => {
    this.setState({ color1: color });
  }

  changeColor2 = color => {
    this.setState({ color2: color });
  }

  render() {
    return (
      <div className="App">
        <Gradient
          color1={this.state.color1}
          color2={this.state.color2}
          changeColor1={this.changeColor1}
          changeColor2={this.changeColor2}
          />


        <Example
          title={this.state.title}
          changeTitle={this.changeTitle}
          />
        <Example2
          title={this.state.title}
          changeTitle={this.changeTitle}
          />
      </div>
    );
  }
}

export default App;