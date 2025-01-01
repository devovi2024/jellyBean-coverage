let tasks = [];

function addTask(task) {
  if (task) {
    tasks.push(task);
    console.log("Task added: " + task);
  } else {
    console.log("Task cannot be empty.");
  }
}

function deleteTask(task) {
  if (tasks.includes(task)) {
    tasks = tasks.filter(t => t !== task);
    console.log("Task deleted: " + task);
  } else {
    console.log("Task not found.");
  }
}

function showTasks() {
  if (tasks.length > 0) {
    console.log("Tasks: ");
    tasks.forEach(task => console.log(task));
  } else {
    console.log("No tasks available.");
  }
}

addTask("Complete homework");
addTask("Clean the house");
addTask("");

showTasks();
deleteTask("Complete homework");
deleteTask("Non-existing task");

showTasks();
