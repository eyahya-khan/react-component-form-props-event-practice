import React, { Component } from "react";

class ClassClick extends Component {
  // no use function before event name
  clickHandler() {
    console.log("Clicked me class");
  }
  render() {
    return (
      // class event handler use 'this'
      <div>
        <button onClick={this.clickHandler}>Click me Class</button>
      </div>
    );
  }
}
export default ClassClick;
