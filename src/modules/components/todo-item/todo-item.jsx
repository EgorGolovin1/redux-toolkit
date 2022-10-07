import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleTask,
  addEdeting,
  configEdeting,
} from "../../redux/tasksSlice";

import PropTypes from "prop-types";
import classNames from "classnames/bind";

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
    <li className={classNames("todo-item", { checked: completed })}>
      <button className="wrapper" onClick={() => addEdet()}>
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
      </button>
      <div className="tasks-buttons">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => completeTask()}
          className={classNames("tasks-btn-complete", { checked: completed })}
        />
        <button
          className="tasks-btn-delete "
          onClick={() => removeTask()}
        ></button>
      </div>
    </li>
  );
};
TodoItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  completed: PropTypes.bool,
  isEditing: PropTypes.bool,
};

export default TodoItem;
