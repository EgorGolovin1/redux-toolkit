import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, clearAll } from "../../redux/tasksSlice";

import PropTypes from "prop-types";
import classNames from "classnames/bind";

import "./todo-filter.sass";

const FILTERS_BTN = [
  {
    text: "Show All",
    id: "all",
  },
  {
    text: "Show Active",
    id: "active",
  },
  {
    text: "Show Completed",
    id: "completed",
  },
];

const ToDoFilter = ({ activeFilter }) => {
  const dispatch = useDispatch();

  const editFilter = (type) => {
    dispatch(changeFilter(type));
  };

  const clearTasks = () => {
    dispatch(clearAll());
  };

  const todos = useSelector((state) => {
    return state.tasks.tasks;
  });

  const amountArr = todos.filter((todo) => !todo.completed);
  let amount = amountArr.length;

  if (todos.length)
    return (
      <div className="todo-filter">
        <span className="amount">{` Tasks left ${amount}`}</span>
        <div className="btn-group">
          {FILTERS_BTN.map(({ text, id }) => (
            <button
              onClick={() => {
                editFilter(id);
              }}
              key={id}
              className={classNames("btn", { tabbed: activeFilter === id })}
            >
              {text}
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            clearTasks();
          }}
          className="btn delete"
        >
          Clear All
        </button>
      </div>
    );
};

ToDoFilter.propTypes = {
  activeFilter: PropTypes.string,
};

export default ToDoFilter;
