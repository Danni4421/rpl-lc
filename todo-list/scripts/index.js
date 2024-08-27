document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-todo-list");

  if (form !== null) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const result = addTodo();
      todos.push(result);
      store(todos);
    });
  }

  todos = load();
  showTodos(todos);
});

let todos = [];

const addTodo = () => {
  const todo = document.getElementById("todo").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;

  return {
    id: +new Date(),
    todo,
    description,
    date,
  };
};
