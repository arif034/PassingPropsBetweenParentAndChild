import React, { Component } from "react";

class Child extends Component {
  render() {
    return <div>Hello {this.props.value}</div>;
  }
}
export default Child;
