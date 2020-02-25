import React from "react";
import "../CSS/Submit.css";

const NameInput = props => {
  let handleEnter = event => {
    if (event.key === "Enter") {
      props.handleNameSubmit();
    }
  };

  return (
    <div>
      <input
        placeholder="Input Name Here"
        autoFocus
        type="text"
        onChange={event => props.handleNameInput(event)}
        onKeyDown={event => handleEnter(event)}
      ></input>
      <button className="Submit" onClick={props.handleNameSubmit}>
        Add Name
      </button>
    </div>
  );
};

export default NameInput;
