import React from "react";
import "../CSS/Submit.css";

const CompOrders = props => {
  return (
    <div className="completed-orders">
      {props.orders.map((order, index) => {
        return (
          <div className="orders">
            <h2>{order}</h2>
            <button className="delete" onClick={() => props.orderDelete(index)}>
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CompOrders;
