// import { addTask, deleteTask, editTask, filterTasks } from "./taskManager.js";
import { renderTasks, handleFormSubmit, deleteEl } from "./domUtils.js";
import { toggleTask } from "./taskManager.js";



const btnAdd = document.getElementById("btnAdd");
const modal = document.getElementById("modal");
const taskForm = document.getElementById("task-form");
const cancelBtn = document.getElementById("cancel-btn");
const taskList = document.getElementById("tasks");


// Initial render
renderTasks();

// Show/hide modal
btnAdd.addEventListener("click", () => {
    modal.style.display = modal.style.display === "block" ? "none" : "block";
});

// Form submit
taskForm.addEventListener("submit", handleFormSubmit);

// Cancel button
cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
    taskForm.reset();
});

// Event delegation for task interactions
taskList.addEventListener("click", (e) => {
    const id = Number(e.target.closest("[data-id]")?.dataset.id);

    if (e.target.closest(".delete")) {
        deleteEl(id);
    } else if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        toggleTask(id);
        renderTasks();
    } else if (e.target.tagName === "P" && id) {
        editEl(id);
    }
});

