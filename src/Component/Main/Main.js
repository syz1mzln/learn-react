import React, { Component } from "react";
import "../../App.css";

import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import LoginButton from "../LoginButton/LoginButton";
import Clock from "../Clock/Clock";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

// class component aka smart component

class Main extends Component {
  // all written between this {} will be shown in the FE
  render() {
    return (
      <div className="app">
        <NavBar>
          <div className="navbar-home">
            <Logo />
            <NavItem text="Home" path="/#home" />
            <NavItem text="My List" path="/#mylist" />
          </div>

          <LoginButton />
        </NavBar>
        <br />
        <br />
        <br />
        <br />
        <br />

        <main>
          <Clock />
          <ShoppingCart />
        </main>
      </div>
    );
  }
}

// only ONE SINGLE default export
export default Main;
