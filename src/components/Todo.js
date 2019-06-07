import React from "react";
import PropTypes from "prop-types";
import TodoFinishAnimation from "./TodoFinishAnimation";
import DatePicker from "react-datepicker";
import "./Todo.css";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";

// ACTIONS
import { toggleTodo, pickDueDate, deleteTodo } from "../actions";

const Todo = ({ completed, _id, dueDate, text, dispatch }) => {
  return (
    <div className="Todo">
      <div className="todo-wrapper" style={{ backgroundColor: completed ? "#01BAC420" : "#efefef" }}>
        <input type="checkbox" checked={completed} onChange={e => dispatch(toggleTodo(_id, e.target.checked))} />
        <p>{text}</p>
        <DatePicker
          selected={dueDate !== undefined ? new Date(dueDate) : undefined}
          dateFormat="MMMM d"
          onChange={date => dispatch(pickDueDate(_id, date))}
          placeholderText="Set Date"
          className="DatePicker"
        />
        <button onClick={() => dispatch(deleteTodo(_id))}>✖︎</button>
      </div>
      <TodoFinishAnimation isDone={completed} />
    </div>
  );
};

// PROPS REQUIRED
Todo.propTypes = {
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  completed: PropTypes.bool.isRequired
};

export default connect()(Todo);
