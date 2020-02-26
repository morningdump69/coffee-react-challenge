import React from "react";
import "../CSS/Submit.css";

const CoffeeInput = props => {
  let handleEnter = event => {
    if (event.key === "Enter") {
      props.handleCoffeeSubmit();
    }
  };

  return (
    <div>
      <input
<<<<<<< HEAD
        className="input"
        placeholder="Input coffee Here"
        autoFocus
        type="text"
        onChange={event => props.handleCoffeeInput(event)}
        onKeyDown={event => handleEnter(event)}
      ></input>
      <button className="Submit" onClick={props.handleCoffeeSubmit}>
        Add Coffee
      </button>
=======
        type="text"
        onChange={event => props.handleCoffeeInput(event)}
      ></input>
      <button onClick={props.handleCoffeeSubmit}>Add Coffee</button>
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
    </div>
  );
};

export default CoffeeInput;
