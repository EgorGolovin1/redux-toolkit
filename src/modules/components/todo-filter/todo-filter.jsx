import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  clearAll,
  actualAmountTodos,
  generalAmountTodos,
  actualFilter,
} from "../../redux/tasksSlice";

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

const ToDoFilter = () => {
  const dispatch = useDispatch();

  const editFilter = (type) => {
    dispatch(changeFilter(type));
  };

  const clearTasks = () => {
    dispatch(clearAll());
  };

  const todosActive = useSelector(actualAmountTodos);
  const todos = useSelector(generalAmountTodos);
  const filter = useSelector(actualFilter);

  const todosActiveAmount = todosActive.length;

  if (todos.length)
    return (
      <div className="todo-filter">
        <span className="amount">{` Tasks left ${todosActiveAmount}`}</span>
        <div className="btn-group">
          {FILTERS_BTN.map(({ text, id }) => (
            <button
              onClick={() => {
                editFilter(id);
              }}
              key={id}
              className={classNames("btn", { tabbed: filter === id })}
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
  actualFilter: PropTypes.string,
};

export default ToDoFilter;
