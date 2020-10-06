import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default Message;
