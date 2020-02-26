import React from "react";
<<<<<<< HEAD
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
=======

const SizeInput = props => {
  return (
    <div>
      <input
        type="text"
        onChange={event => props.handleSizeInput(event)}
      ></input>
      <button onClick={props.handleSizeSubmit}>Add Size</button>
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
    </div>
  );
};

export default SizeInput;
