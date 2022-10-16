import React from "react";
import TodoItem from "../todo-item/todo-item";
import { useSelector } from "react-redux";

import { filteredTodoList } from "../../redux/tasksSlice";

import PropTypes from "prop-types";

import "./todo-list.sass";

const TodoList = () => {
  const todos = useSelector(filteredTodoList);
  return (
    <ul key={"list"} className="tasks-list">
      {todos.map((todo) => (
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
  todos: PropTypes.array,
};

export default TodoList;
