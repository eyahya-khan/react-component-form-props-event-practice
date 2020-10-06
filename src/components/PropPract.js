import React from "react";

const PropPract = (props) => {
  return (
    <div>
      <h1>My name is {props.name}</h1>
      {/* it shows the button from App.js */}
      {props.children}
    </div>
  );
};
export default PropPract;
