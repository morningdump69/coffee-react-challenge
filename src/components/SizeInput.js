import React from "react";
import "../CSS/Submit.css"

const SizeInput = props => {
  return (
    <div>
      <input
      placeholder="Input Size Here"
        type="text"
        onChange={event => props.handleSizeInput(event)}
      ></input>
      <button className="Submit" onClick={props.handleSizeSubmit}>Add Size</button>
    </div>
  );
};

export default SizeInput;
