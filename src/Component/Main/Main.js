import React, { Component } from "react";
import "../../App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import Home from "../../routes/Home/Home";
import ShowDetails from "../../routes/ShowDetail/ShowDetails";
// import Clock from "../Clock/Clock";
// import ShoppingCart from "../ShoppingCart/ShoppingCart";
// import ToDoList from "../Todo/ToDoList";

// class component aka smart component

class Main extends Component {
  // all written between this {} will be shown in the FE
  state = {
    username: null,
  };

  login = () => {
    this.setState({ username: "Captain America" });
  };

  logout = () => {
    this.setState({ username: null });
  };

  render() {
    const button =
      this.state.username !== null ? (
        <LogoutButton logout={this.logout} />
      ) : (
        <LoginButton login={this.login} />
      );

    return (
      <Router>
        <div className="app">
          <NavBar>
            <div className="navbar-home">
              <Logo />
              <NavItem path="/">Home</NavItem>
              <NavItem path="/mylist">My List</NavItem>
            </div>

            {button}
          </NavBar>

          <main>
            Hello, {this.state.username !== null && this.state.username}
            <br />
            <br />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/mylist">My List</Route>
              <Route path="/shows/:id/:name?">
                <ShowDetails />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

// only ONE SINGLE default export
export default Main;
