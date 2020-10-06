import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello my dear...",
    };
  }
  clickHandler = () => {
    this.setState({
      message: "Disco dancer",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default Message;
