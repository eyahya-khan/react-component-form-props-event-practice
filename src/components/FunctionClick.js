import React from "react";

//event handling using function component
function FunctionClick() {
  //use 'function' before event handler
  function clickHandler() {
    console.log("Clicked me function");
  }
  return (
    <div>
      <button onClick={clickHandler}>click me function</button>
    </div>
  );
}
export default FunctionClick;
