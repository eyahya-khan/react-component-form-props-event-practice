import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import PropPract from "./components/PropPract";
import Message from "./components/Message";
import SetstatePractice from "./components/SetstatePractice";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}

      {/*props practice */}
      {/* <PropPract name="Abdul">
        <button>Click</button>
      </PropPract>
      <PropPract name="Malek">Hello this is children</PropPract>
      <PropPract name="Khalek" /> */}

      {/*state practice */}
      {/* <Message /> */}

      {/*setState practice */}
      {/* <SetstatePractice /> */}

      {/* form practice */}
      <Form />
    </div>
  );
}

export default App;
