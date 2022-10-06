import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleTask,
  addEdeting,
  configEdeting,
} from "../../redux/tasksSlice";

import PropTypes from "prop-types";

import "./todo-item.sass";

const TodoItem = ({ id, title, completed, isEditing }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(deleteTask(id));
  };

  const completeTask = () => {
    dispatch(toggleTask(id));
  };

  const addEdet = () => {
    dispatch(addEdeting(id));
  };

  const config = (key, item) => {
    if (item.target.value.length > 3 && key === "Enter") {
      dispatch(
        configEdeting({
          description: item.target.value,
          id: id,
        })
      );
      item.target.blur();
    }
  };

  return (
    <li className={completed ? "todo-item checked" : "todo-item"}>
      <div onClick={() => addEdet()}>
        {isEditing ? (
          <input
            type="textarea"
            className="todo-item-description input"
            onKeyPress={(e) => config(e.key, e)}
            defaultValue={title}
          ></input>
        ) : (
          <div className="todo-item-description">{title}</div>
        )}
      </div>
      <div className="tasks-buttons">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => completeTask()}
          className={
            completed ? "tasks-btn-complete" : "tasks-btn-complete checked"
          }
        />
        <div className="tasks-btn-delete " onClick={() => removeTask()}></div>
      </div>
    </li>
  );
};
TodoItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
  isEditing: PropTypes.bool,
};

export default TodoItem;
