import React, { Component } from "react";
import "./CSS/App.css";
import NameInput from "./components/NameInput";
import CurrentOrder from "./components/CurrentOrder";
import CoffeeInput from "./components/CoffeeInput";
import SizeInput from "./components/SizeInput";
<<<<<<< HEAD
import CompOrders from "./components/CompOrders";
=======
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b

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
<<<<<<< HEAD
    showCoffeeInput: false,
    randomNameShow: false,
    randomName: "",
    endGame: false
=======
    showCoffeeInput: false
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
  };

  handleNameInput = event => {
    let capName = event.target.value.toUpperCase();
    this.setState({ currentName: capName });
  };

  handleSizeInput = event => {
<<<<<<< HEAD
    this.setState({ currentSize: ` would like a ${event.target.value}, ` });
=======
    this.setState({ currentSize: ` would like a ${event.target.value},` });
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
  };

  handleCoffeeInput = event => {
    this.setState({ currentCoffee: `${event.target.value}.` });
  };

  handleNameSubmit = () => {
<<<<<<< HEAD
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
=======
    this.setState({
      currentOrder: this.state.currentName,
      showNameInput: false,
      showSizeInput: true,
      showCoffeeInput: false
    });
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
  };

  handleSizeSubmit = () => {
    let order = this.state.currentOrder;
    let cSize = this.state.currentSize;
    let afterOrder = order + cSize;
<<<<<<< HEAD
=======
    let ordersArray = [...this.state.orders];
    ordersArray.push(afterOrder);
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
    this.setState({
      showNameInput: false,
      showSizeInput: false,
      showCoffeeInput: true,
<<<<<<< HEAD
      currentOrder: afterOrder
=======
      currentOrder: order
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
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
<<<<<<< HEAD
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
      endGame: false
    });
=======
    this.setState(this.state.orders.splice(index, 1));
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
  };

  render() {
    return (
      <div className="container">
        <h1>Who wants coffee?</h1>
<<<<<<< HEAD
        {this.state.endGame ? (
          <button className="Reset" onClick={this.handleReset}>
            Reset
          </button>
        ) : (
          this.state.showNameInput && (
            <NameInput
              handleNameInput={this.handleNameInput}
              handleNameSubmit={this.handleNameSubmit}
            />
          )
=======
        {this.state.showNameInput && (
          <NameInput
            handleNameInput={this.handleNameInput}
            handleNameSubmit={this.handleNameSubmit}
          />
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
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
        <h1>Dan has entered the game</h1>
        <CurrentOrder currentOrder={this.state.currentOrder} />
<<<<<<< HEAD
        <CompOrders orders={this.state.orders} orderDelete={this.orderDelete} />
        {this.state.randomNameShow ? (
          <h3>{`${this.state.randomName} pays`}</h3>
        ) : (
          <h3 onClick={() => this.handleRandomName()}>
            Click to end order and choose who pays
          </h3>
        )}
=======
        <div className="completed-orders">
          {this.state.orders.map((order, index) => {
            return (
              <div className="orders">
                <h2>{order}</h2>
                <button onClick={() => this.orderDelete(index)}>x</button>
              </div>
            );
          })}
        </div>
>>>>>>> 51c3a0b8f46b618258522520ead15ac29b873a1b
      </div>
    );
  }
}
export default App;
