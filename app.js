// import { addTask, deleteTask, editTask, filterTasks } from "./taskManager.js";
import { renderTasks, handleFormSubmit, deleteEl } from "./domUtils.js";



const btnAdd = document.getElementById("btnAdd");
const modal = document.getElementById("modal");

btnAdd.addEventListener("click", function() {
    // display the modal
    modal.style.display = modal.style.display === "block" ? "none" : "block";
})


// initial render
renderTasks();

//event listener
document.getElementById("task-form").addEventListener("submit", handleFormSubmit);
// delete task
// const deleteEl = document.getElementById("delete");
document.getElementById("delete").addEventListener("click", deleteEl)
