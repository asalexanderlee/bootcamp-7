import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoEntry from "./components/TodoEntry";
import ControlPanel from "./components/ControlPanel";
import { connect } from "react-redux";
import { importTodos } from "./actions";

class App extends React.Component {
  //when App is about to be mounted, import todos from source
  componentWillMount() {
    this.props
      .dispatch(importTodos())
      .then(() => console.log("Successfully imported todos"))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="App">
        <ControlPanel />
        <h1>Todo List</h1>
        <TodoEntry />
        <TodoList />
      </div>
    );
  }
}

export default connect()(App);
