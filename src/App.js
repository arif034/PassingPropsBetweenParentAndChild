import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";
import Child from "./Child.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "I am Groot" };
  }
  render() {
    return (
      <div className="App">
        <Child value={this.state.message} />
      </div>
    );
  }
}
export default App;
