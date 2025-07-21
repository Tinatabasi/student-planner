
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = task + ' <button onclick="deleteTask(' + index + ')">Delete</button>';
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = "";
    saveTasks();
    renderTasks();
  }
});

renderTasks()