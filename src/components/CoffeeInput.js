import React from "react";
import "../CSS/Submit.css"

const CoffeeInput = props => {
  return (
    <div>
      <input
      placeholder="Input coffee Here"
        type="text"
        onChange={event => props.handleCoffeeInput(event)}
      ></input>
      <button className="Submit" onClick={props.handleCoffeeSubmit}>Add Coffee</button>
    </div>
  );
};

export default CoffeeInput;
