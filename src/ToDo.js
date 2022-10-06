import React from "react";
import ToDoInput from "./modules/components/todo-input/todo-input";
import TodoList from "./modules/components/todo-list/todo-list";
import Title from "./modules/components/title/title";
import ToDoFilter from "./modules/components/todo-filter/todo-filter";

import { useSelector } from "react-redux";

import "./todo.sass";
const ToDo = () => {
  const todos = useSelector((state) => {
    return state.tasks.tasks;
  });

  const activeFilter = useSelector((state) => {
    return state.tasks.filterStatus;
  });

  return (
    <div className="todo-wrapper">
      <Title title="TODO" />
      <ToDoInput />
      <TodoList todos={todos} activeFilter={activeFilter} />
      <ToDoFilter activeFilter={activeFilter} />
    </div>
  );
};

export default ToDo;
