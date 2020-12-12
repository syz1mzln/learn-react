import React, { Component } from "react";

export default class ShoppingCart extends Component {
  // State initialisation in constructor
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  incrementCount(event) {
    event.preventDefault();
    event.stopPropagation();

    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }

  addToCart(event) {
    this.incrementCount(event);
  }

  //REMOVE FROM CART

  minusCount(event) {
    event.preventDefault();
    event.stopPropagation();

    this.setState((state) => {
      return {
        count: state.count - 1,
      };
    });
  }

  removeFromCart(event) {
    this.minusCount(event);
  }

  render() {
    return (
      <div>
        <h1>Counter ({this.state.count})</h1>
        <button type="button" onClick={this.addToCart}>
          +
        </button>
        <button type="button" onClick={this.removeFromCart}>
          -
        </button>
      </div>
    );
  }
}
