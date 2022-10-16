import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";

import "./todo-input.sass";

const ToDoInput = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length < 3) {
      alert("Your task must be longer than 3 characters");
      setValue("");
      return;
    }

    dispatch(
      addTask({
        description: value,
      })
    );

    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="todo-input-wrapper">
      <button type="submit" className="add-btn">
        Add Task
      </button>
      <input
        type="text"
        value={value}
        className="add-input"
        placeholder="What needs to be done?"
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
};

export default ToDoInput;
