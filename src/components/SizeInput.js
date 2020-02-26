import React from "react";
import "../CSS/Submit.css";

const SizeInput = props => {
  let handleEnter = event => {
    if (event.key === "Enter") {
      props.handleSizeSubmit();
    }
  };

  return (
    <div>
      <input
        className="input"
        placeholder="Input Size Here"
        autoFocus
        type="text"
        onChange={event => props.handleSizeInput(event)}
        onKeyDown={event => handleEnter(event)}
      ></input>
      <button className="Submit" onClick={props.handleSizeSubmit}>
        Add Size
      </button>
    </div>
  );
};

export default SizeInput;
