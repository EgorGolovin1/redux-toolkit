import { createSlice, createSelector } from "@reduxjs/toolkit";

import { uid } from "uid";

const getTodos = (state) => state.tasks.tasks;
const getActiveFilter = (state) => state.tasks.filterStatus;

export const actualAmountTodos = createSelector(getTodos, (todos) => {
  return todos.filter((t) => !t.completed);
});

export const actualFilter = createSelector(getActiveFilter, (filter) => {
  return filter;
});

export const generalAmountTodos = createSelector(getTodos, (todos) => {
  return todos;
});

export const filteredTodoList = createSelector(
  [getActiveFilter, getTodos],
  (filterStatus, todos) => {
    switch (filterStatus) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((t) => t.completed);
      case "active":
        return todos.filter((t) => !t.completed);
    }
  }
);

const initialValue = {
  tasks: [],
  filterStatus: "all",
};

export const tasksSlice = createSlice({
  name: "ToDo",
  initialState: initialValue,
  reducers: {
    addTask(state, action) {
      const id = uid();
      state.tasks.push({
        ...action.payload,
        id: id,
        completed: false,
        isEditing: false,
      });
    },
    deleteTask(state, action) {
      let tasks = state.tasks;
      tasks = tasks.filter((todo) => todo.id !== action.payload);
      state.tasks = tasks;
    },
    toggleTask(state, action) {
      const tasks = state.tasks;
      const task = tasks.find((todo) => todo.id === action.payload);
      task.completed = !task.completed;
      state.tasks = tasks;
    },
    changeFilter(state, action) {
      state.filterStatus = action.payload;
    },
    clearAll(state) {
      state.tasks = [];
    },
    addEdeting(state, action) {
      const todo = state.tasks.find((todo) => todo.id === action.payload);
      todo.isEditing = true;
    },
    configEdeting(state, action) {
      const tasks = state.tasks;
      const task = tasks.find((todo) => todo.id === action.payload.id);
      task.description = action.payload.description;
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTask,
  changeFilter,
  clearAll,
  addEdeting,
  configEdeting,
} = tasksSlice.actions;

export default tasksSlice.reducer;
