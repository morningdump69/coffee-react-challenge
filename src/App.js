import React, { Component } from "react";
import "./App.css";
import NameInput from "./components/NameInput";
import CurrentOrder from "./components/CurrentOrder";
import CoffeeInput from "./components/CoffeeInput";
import SizeInput from "./components/SizeInput";

class App extends Component {
  state = {
    currentName: "",
    currentSize: "",
    currentCoffee: "",
    currentOrder: "",
    orders: [],
    showNameInput: true,
    showSizeInput: false,
    showCoffeeInput: false
  };

  handleNameInput = event => {
    this.setState({ currentName: event.target.value });
  };

  handleSizeInput = event => {
    this.setState({ currentSize: ` would like a ${event.target.value},` });
  };

  handleCoffeeInput = event => {
    this.setState({ currentCoffee: `${event.target.value}.` });
  };

  handleNameSubmit = () => {
    this.setState({
      currentOrder: this.state.currentName,
      showNameInput: false,
      showSizeInput: true,
      showCoffeeInput: false
    });
  };

  handleSizeSubmit = () => {
    let order = this.state.currentOrder;
    let cSize = this.state.currentSize;
    let afterOrder = order + cSize;
    let ordersArray = [...this.state.orders];
    ordersArray.push(afterOrder);
    this.setState({
      showNameInput: false,
      showSizeInput: false,
      showCoffeeInput: true,
      currentOrder: order
    });
  };

  handleCoffeeSubmit = () => {
    let order = this.state.currentOrder;
    order += this.state.currentCoffee;
    let ordersArray = this.state.orders;
    ordersArray.push(order);
    this.setState({
      showCoffeeInput: false,
      showSizeInput: false,
      showNameInput: true,
      orders: ordersArray,
      currentName: "",
      currentSize: "",
      currentOrder: "",
      currentCoffee: ""
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Who wants coffee?</h1>
        {this.state.showNameInput && (
          <NameInput
            handleNameInput={this.handleNameInput}
            handleNameSubmit={this.handleNameSubmit}
          />
        )}
        {this.state.showSizeInput && (
          <SizeInput
            handleSizeInput={this.handleSizeInput}
            handleSizeSubmit={this.handleSizeSubmit}
          />
        )}
        {this.state.showCoffeeInput && (
          <CoffeeInput
            handleCoffeeInput={this.handleCoffeeInput}
            handleCoffeeSubmit={this.handleCoffeeSubmit}
          />
        )}
        <CurrentOrder currentOrder={this.state.currentOrder} />
        <div className="completed-orders">
          {this.state.orders.map((order, index) => {
            return <h2>{order}</h2>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
