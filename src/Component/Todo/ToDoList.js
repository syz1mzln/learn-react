import React, { Component } from "react";

export default class ToDoList extends Component {
  state = {
    setInput: "",
    task: [],
  };

  inputChange = (e) => {
    this.setState({
      setInput: e.target.value,
    });
  };

  addTask = (e) => {
    e.preventDefault(); // stop refresh
    if (this.state.setInput !== "") {
      this.setState({
        task: [this.state.setInput, ...this.state.task],
        setInput: "", // placeholder gone when start typing
      });
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>To-Do List</h1>
        </header>

        <form onSubmit={this.addTask}>
          <input
            className="todo-input"
            type="text"
            value={this.state.setInput}
            placeholder="Whats Goin On Today?"
            onChange={this.inputChange}
          />
          <button onClick={this.buttonSubmit}>ADD</button>
          <ol>
            {this.state.task.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ol>
        </form>
      </div>
    );
  }
}
