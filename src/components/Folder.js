import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";
import "./Folder.css";
import { connect } from "react-redux";

import { expandFolder, changeFolderName, deleteTodo } from "../actions";

const Folder = ({ id, expanded, text, todos, dispatch }) => {
  return (
    <div className="Folder">
      <div className="folder-wrapper">
        <div
          className="down-arrow"
          style={{ transform: expanded ? "none" : "scaleY(-1)" }}
          onClick={() => dispatch(expandFolder(id))}
        >
          ⌃
        </div>
        <input type="text" value={text} onChange={e => dispatch(changeFolderName(e.target.value, id))} />
        <div className="delete" onClick={() => dispatch(deleteTodo(id))}>
          ✖︎
        </div>
      </div>
      {expanded && todos.map((todo, i) => <Todo todo={todo} key={i} />)}
    </div>
  );
};

Folder.propTypes = {
  id: PropTypes.number.isRequired,
  expanded: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      dueDate: PropTypes.string
    }).isRequired
  ).isRequired
};
export default connect()(Folder);
