import React, { Component } from "react";
import "./TodoEntry.css";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const ENTER_KEY = 13;

// NOTE: using local state here to handle input -- we can use local state here
// because the other components don't need to use the input until it's submitted
class TodoEntry extends Component {
  state = {
    text: ""
  };
  handleSubmit = (e, keyPressed = false) => {
    if (keyPressed && e.keyCode !== ENTER_KEY) return;
    if (this.state.text !== "") {
      this.props.dispatch(addTodo(this.state.text));
      this.setState({ text: "" });
    }
  };
  handleChange = e => this.setState({ text: e.target.value });
  render() {
    return (
      <div className="TodoEntry">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
          onKeyDown={e => this.handleSubmit(e, true)}
        />
        <button onClick={e => this.handleSubmit(e)}>+</button>
      </div>
    );
  }
}

export default connect()(TodoEntry);
