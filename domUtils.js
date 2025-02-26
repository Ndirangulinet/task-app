import { addTask, fetchTasks, deleteTask, editTask, toggleTask } from "./taskManager.js";

export const handleFormSubmit = (e) => {
    e.preventDefault();
    const task = {
        id: Date.now(),
        name: e.target.elements.task.value,
        status: e.target.elements.taskStatus.value
    };
    if (task.name.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }
    addTask(task);
    renderTasks();
    e.target.reset();
    document.getElementById("modal").style.display = "none";
};

export const renderTasks = () => {
    const tasks = fetchTasks();
    const taskList = document.getElementById("tasks");

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>Added tasks should appear here</p>";
        return;
    }

    taskList.innerHTML = "";
    tasks.forEach(task => {
        // Skip tasks without a valid name or ID
        if (!task || !task.name || !task.id) return;

        const taskItem = document.createElement("div");
        taskItem.classList.add("task-card");
        if (task.status === "complete") taskItem.classList.add("completed");

        taskItem.innerHTML = `
            <input type="checkbox" name="complete" id="complete-task" ${task.status === "complete" ? "checked" : ""} data-id="${task.id}">
            <p data-id="${task.id}">${task.name || "Unnamed Task"}</p> <!-- Fallback for missing name -->
            <div class="delete" data-id="${task.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/>
                </svg>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
};

export const deleteEl = (id) => {
    deleteTask(id);
    renderTasks();
};

export const editEl = (id) => {
    const task = fetchTasks().find(t => t.id === id);
    if (!task || !task.name) return; // Prevent editing invalid tasks
    const newName = prompt("Edit task:", task.name);
    if (newName && newName.trim() !== "") {
        editTask(id, { name: newName });
        renderTasks();
    }
};