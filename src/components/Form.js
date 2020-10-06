import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  nameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    return (
      <form>
        <div>
          <label>Your name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.nameChange}
          />
        </div>
        {/* <button onClick={this.nameChange}>Submit</button> */}
      </form>
    );
  }
}
export default Form;
