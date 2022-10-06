import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("tasks");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }

  window.localStorage.setItem("tasks", JSON.stringify([]));
  return [];
};

const initialValue = {
  tasks: getInitialTodo(),
  filterStatus: "all",
};
export const tasksSlice = createSlice({
  name: "ToDo",
  initialState: initialValue,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: action.payload.id,
        description: action.payload.description,
        completed: false,
        isEditing: false,
      });
      const tasks = window.localStorage.getItem("tasks");
      if (tasks) {
        const tasksArr = JSON.parse(tasks);
        tasksArr.push({
          ...action.payload,
          completed: false,
          isEditing: false,
        });
        window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
      } else {
        window.localStorage.setItem(
          "tasks",
          JSON.stringify([
            {
              ...action.payload,
              completed: false,
              isEditing: false,
            },
          ])
        );
      }
    },
    deleteTask(state, action) {
      const tasks = window.localStorage.getItem("tasks");
      if (tasks) {
        let tasksArr = JSON.parse(tasks);
        tasksArr = tasksArr.filter((todo) => todo.id !== action.payload);
        window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
        state.tasks = tasksArr;
      }
    },
    toggleTask(state, action) {
      const tasks = window.localStorage.getItem("tasks");
      if (tasks) {
        let tasksArr = JSON.parse(tasks);
        const todo = tasksArr.find((todo) => todo.id === action.payload);
        todo.completed = !todo.completed;
        window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
        state.tasks = tasksArr;
      }
    },
    changeFilter(state, action) {
      state.filterStatus = action.payload;
    },
    clearAll(state) {
      const tasks = window.localStorage.getItem("tasks");
      if (tasks) {
        let tasksArr = JSON.parse(tasks);
        tasksArr = [];
        window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
        state.tasks = tasksArr;
      }
    },
    addEdeting(state, action) {
      const todo = state.tasks.find((todo) => todo.id === action.payload);
      todo.isEditing = true;
    },
    configEdeting(state, action) {
      const tasks = window.localStorage.getItem("tasks");
      if (tasks) {
        let tasksArr = JSON.parse(tasks);
        const todo = tasksArr.find((todo) => todo.id === action.payload.id);
        todo.description = action.payload.description;
        window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
        state.tasks = tasksArr;
      }
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

