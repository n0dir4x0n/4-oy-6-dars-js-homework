let form = document.querySelector("#todo-form");
let todos = document.querySelector("#todos");
let clearBtn = document.querySelector("#clear-btn");
let input = document.querySelector("#todo-label");
let count = document.querySelector(".count");

let template = localStorage.getItem("template");
todos.innerHTML = template;

let counter = localStorage.getItem("count");
count.innerHTML = counter;
if (!template) {
  count.innerHTML = 0;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let todo = input.value;
  if (!todo) {
    alert("Bo'sh mumkin emas");
    return;
  }

  let id = Date.now();

  let template = `<li class="todo" data-todo-id="${id}">
          <input type="checkbox" hidden id="${id}" />
          <span class="todo-label">${todo}</span>
        </li>`;

  localStorage.setItem("template", (todos.innerHTML += template));
  localStorage.setItem("count", ++count.innerHTML);
  e.target.reset();
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  todos.innerHTML = "";
  count.innerHTML = 0;
});
