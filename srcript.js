const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

let todos = [];

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&times;";
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      li.classList.add("deleted");
      setTimeout(() => {
        todos.splice(index, 1);
        renderTodos();
      }, 300);
    });
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

addButton.addEventListener("click", () => {
  const todo = todoInput.value.trim();
  if (todo) {
    if (todos.includes(todo)) {
      alert("This task is already on the list.");
    } else {
      todos.push(todo);
      todoInput.value = "";
      renderTodos();
    }
  }
});

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});

renderTodos();
