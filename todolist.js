const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskBody = document.getElementById("task-body");

window.addEventListener("load", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTask(task.text, task.completed));
});

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#task-body tr").forEach(row => {
    const text = row.querySelector(".task-text").textContent;
    const completed = row.classList.contains("completed");
    tasks.push({ text, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(text, completed = false) {
  const row = document.createElement("tr");
  if (completed) row.classList.add("completed");

  const taskCell = document.createElement("td");
  taskCell.textContent = text;
  taskCell.className = "task-text";
  taskCell.style.cursor = "pointer";

  taskCell.addEventListener("click", () => {
    row.classList.toggle("completed");
    saveTasks();
  });


  const statusCell = document.createElement("td");
  statusCell.textContent = completed ? "Done" : "Pending";
  row.classList.contains("completed") ? statusCell.textContent = "Done" : statusCell.textContent = "Pending";

  row.addEventListener("click", () => {
    statusCell.textContent = row.classList.contains("completed") ? "Done" : "Pending";
  });

  const actionCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    row.remove();
    saveTasks();
  });

  actionCell.appendChild(deleteBtn);

  row.appendChild(taskCell);
  row.appendChild(statusCell);
  row.appendChild(actionCell);

  taskBody.appendChild(row);
  saveTasks();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  addTask(taskText);
  taskInput.value ="";
});
