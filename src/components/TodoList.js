import React from "react";
import Todo from "./Todo";
import Folder from "./Folder";
import "./TodoList.css";
import { connect } from "react-redux";
import { addFolder, sortAToZ, sortByDate } from "../actions";

const TodoList = ({ todos, dispatch }) => {
  return (
    <div className="TodoList">
      <div className="flex">
        <div className="sort">
          {todos.length > 1 && <button onClick={() => dispatch(sortAToZ())}>Sort A to Z</button>}
          {todos.length > 1 && <button onClick={() => dispatch(sortByDate())}>Sort by Due Date</button>}
        </div>
        {todos.length > -1 && <button onClick={() => dispatch(addFolder())}>Add Folder</button>}
      </div>
      {todos
        .filter(todo => todo.completed === false)
        .map((todo, i) => (todo.type === "todo" ? <Todo {...todo} key={i} /> : <Folder {...todo} key={i} />))}
      <br />
      {todos
        .filter(todo => todo.completed === true)
        .map((todo, i) => (todo.type === "todo" ? <Todo {...todo} key={i} /> : <Folder {...todo} key={i} />))}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
