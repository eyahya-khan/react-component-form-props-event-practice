import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    //this line for 03 approach
    // this.clickHandler = this.clickHandler.bind(this);
  }
  //01. 02. 03 approach
  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //   }

  // 04 approach
  clickHandler = () => {
    this.setState({
      message: "goodbye",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 01.approach must use bind(this) otherwise shows error in setState */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* 02.approach use arrow function instead of bind(this) */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* 03.approach use this.clickHandler = this.clickHandler.bind(this); 
        in constructor. it is known as 'binding class constructor' */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* 04. approach known as arrow function. difine a arrow function instead  */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
