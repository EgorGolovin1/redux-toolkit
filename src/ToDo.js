import React from "react";
import ToDoInput from "./modules/components/todo-input/todo-input";
import TodoList from "./modules/components/todo-list/todo-list";
import Title from "./modules/components/title/title";
import ToDoFilter from "./modules/components/todo-filter/todo-filter";
import Notes from "./modules/components/todo-notes/todo-notes";

import "./todo.sass";
const ToDo = () => {
  return (
    <div className="todo-wrapper">
      <Title title="TODO" />
      <ToDoInput />
      <TodoList />
      <ToDoFilter />
      <Notes />
    </div>
  );
};

export default ToDo;
