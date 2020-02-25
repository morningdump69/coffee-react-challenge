import React from "react";
import "../CSS/Submit.css"

const NameInput = props => {
  return (
    <div>
      <input
      placeholder="Input Name Here"
        type="text"
        onChange={event => props.handleNameInput(event)}
      ></input>
      <button className="Submit" onClick={props.handleNameSubmit}>Add Name</button>
    </div>
  );
};

export default NameInput;
