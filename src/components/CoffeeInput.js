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
        placeholder="Input coffee Here"
        autoFocus
        type="text"
        onChange={event => props.handleCoffeeInput(event)}
        onKeyDown={event => handleEnter(event)}
      ></input>
      <button className="Submit" onClick={props.handleCoffeeSubmit}>
        Add Coffee
      </button>
    </div>
  );
};

export default CoffeeInput;
