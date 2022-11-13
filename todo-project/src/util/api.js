import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/todo",
  headers: {
    "Content-Type": "Application/json",
  },
});

export const todoApi = {
  getTodoList: () => api.get(),
  addTodo: (todo) => api.post("", todo),
  getTodo: (num) => api.get(`${num}`),
  updateTodo: (todo) => api.put("", todo),
  updateTodoState: (num) => api.put(`${num}/state`),
  deleteTodo: (num) => api.delete(num),
  deleteAllTodo: () => api.delete("/deleteAll"),
};
