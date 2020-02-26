import React, { Component } from "react";
import "./CSS/App.css";
import NameInput from "./components/NameInput";
import CurrentOrder from "./components/CurrentOrder";
import CoffeeInput from "./components/CoffeeInput";
import SizeInput from "./components/SizeInput";
import CompOrders from "./components/CompOrders";

class App extends Component {
  state = {
    currentName: "",
    currentSize: "",
    currentCoffee: "",
    currentOrder: "",
    orders: [],
    orderNames: [],
    showNameInput: true,
    showSizeInput: false,
    showCoffeeInput: false,
    randomNameShow: false,
    randomName: "",
    endGame: false,
    roulette: false
  };

  componentDidUpdate() {
    if (this.state.orders.length >= 2 && this.state.roulette === false) {
      this.setState({ roulette: true });
    }
  }

  handleNameInput = event => {
    let capName = event.target.value.toUpperCase();
    this.setState({ currentName: capName });
  };

  handleSizeInput = event => {
    this.setState({ currentSize: ` would like a ${event.target.value}, ` });
  };

  handleCoffeeInput = event => {
    this.setState({ currentCoffee: `${event.target.value}.` });
  };

  handleNameSubmit = () => {
    if (this.state.endGame !== true) {
      let names = [...this.state.orderNames];
      let newName = this.state.currentName;
      names.push(newName);
      this.setState({
        currentOrder: newName,
        orderNames: names,
        showNameInput: false,
        showSizeInput: true,
        showCoffeeInput: false
      });
    }
  };

  handleSizeSubmit = () => {
    let order = this.state.currentOrder;
    let cSize = this.state.currentSize;
    let afterOrder = order + cSize;
    this.setState({
      showNameInput: false,
      showSizeInput: false,
      showCoffeeInput: true,
      currentOrder: afterOrder
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

  orderDelete = index => {
    let newOrders = [...this.state.orders];
    let newOrderNames = [...this.state.orderNames];
    newOrders.splice(index, 1);
    newOrderNames.splice(index, 1);
    this.setState({
      orders: newOrders,
      orderNames: newOrderNames
    });
  };

  handleRandomName = () => {
    let randomNameNumGen = Math.floor(
      Math.random() * this.state.orderNames.length
    );
    let randomNameGen = this.state.orderNames[randomNameNumGen];
    this.setState({
      randomName: randomNameGen,
      randomNameShow: true,
      endGame: true
    });
  };

  handleReset = () => {
    let resetOrders = [];
    this.setState({
      orders: resetOrders,
      randomNameShow: false,
      randomName: "",
      endGame: false,
      roulette: false
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Who wants coffee?</h1>
        {this.state.endGame ? (
          <button onClick={this.handleReset}>Reset Order Form</button>
        ) : (
          this.state.showNameInput && (
            <NameInput
              handleNameInput={this.handleNameInput}
              handleNameSubmit={this.handleNameSubmit}
            />
          )
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
        <CompOrders orders={this.state.orders} orderDelete={this.orderDelete} />

        {this.state.roulette ? (
          this.state.randomNameShow ? (
            <h3>{`${this.state.randomName} pays`}</h3>
          ) : (
            <h3 onClick={() => this.handleRandomName()}>
              Click to end order and choose who pays
            </h3>
          )
        ) : (
          <h3>Add atleast 2 orders for roulette</h3>
        )}
      </div>
    );
  }
}
export default App;
