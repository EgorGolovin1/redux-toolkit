import React from "react";
import TodoItem from "../todo-item/todo-item";

import PropTypes from "prop-types";

import "./todo-list.sass";

const TodoList = ({ todos, activeFilter }) => {
  const filteredTodoList = todos.filter((item) => {
    if (activeFilter === "active") {
      return item.completed === false;
    }
    if (activeFilter === "completed") {
      return item.completed === true;
    } else return true;
  });
  return (
    <ul className="tasks-list">
      {filteredTodoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.description}
          completed={todo.completed}
          isEditing={todo.isEditing}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: [],
  activeFilter: PropTypes.string,
};

export default TodoList;
