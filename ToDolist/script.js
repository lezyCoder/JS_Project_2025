let taskInput = document.querySelector("#taskInput");
let addTask = document.querySelector("#addTask");
let taskList = document.querySelector("#taskList");

addTask.addEventListener("click", function (e) {
  e.preventDefault();
  // If task is empty
  let taskText = taskInput.value;
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }
  // Create a new task item
  let newTask = document.createElement("li");
  newTask.innerHTML = `${taskText} <button class="deleteBtn" id = "deleteBtn">Delete</button>`;

  // Adding the new task to the top of the list
  taskList.insertBefore(newTask, taskList.children[0]);

  // Clear the input field
  taskInput.value = "";

  // Delete a task when the delete button is clicked

  //  Learn why not used the document.querySelector ??  because it select the first query having class "deleteBtn"  
  let deleteBtn = newTask.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(newTask); // Remove the task from the list
  });
});
