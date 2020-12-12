import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      dateTime: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ dateTime: new Date() });
    }, 1000);
  }

  // RUN EVERYTIME props, state and forceUpdate() is trigger
  componentDidUpdate() {}

  // ONLY RUN ONCE when component is removed from browser
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <div>{this.state.dateTime.toLocaleTimeString()}</div>;
  }
}

export default Clock;
