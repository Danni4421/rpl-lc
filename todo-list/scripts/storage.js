const store = (data) => {
  localStorage.setItem("todos", JSON.stringify(data));
};

const load = () => {
  const todos = localStorage.getItem("todos");
  return JSON.parse(todos);
};

const showTodos = (todos) => {
  const container = document.getElementById("todo-list-container");

  for (let i = 0; i < todos.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const todoElement = document.createElement("h5");
    todoElement.classList.add("card-title");
    todoElement.innerHTML = todos[i].todo;

    const paragraphElement = document.createElement("p");
    paragraphElement.classList.add("card-text");
    todoElement.innerHTML = todos[i].description;

    const anchorElement = document.createElement("a");
    anchorElement.innerHTML = "Lihat Detail";
    anchorElement.classList.add("btn", "btn-primary");

    cardBody.append(todoElement, paragraphElement, anchorElement);
    card.append(cardBody);

    container.append(card);
  }
};
