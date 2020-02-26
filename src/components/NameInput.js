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
<<<<<<< HEAD
        className="input"
        placeholder="Input Name Here"
        autoFocus
        type="text"
        onChange={event => props.handleNameInput(event)}
        onKeyDown={event => handleEnter(event)}
      ></input>
      <button className="Submit" onClick={props.handleNameSubmit}>
        Add Name
      </button>
=======
        type="text"
        onChange={event => props.handleNameInput(event)}
      ></input>
      <button onClick={props.handleNameSubmit}>Add Name</button>
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
    </div>
  );
};

export default NameInput;
