import React from "react";

function Example2(props) {
  return (
    <div className="Example">
      <h1>{props.title}</h1>
      <input
      type="text"
      onChange={event => props.changeTitle(event.target.value)}
      value={props.title}></input>
    </div>
  );
}
export default Example2;
