import { addTask, fetchTasks, deleteTask, editTask, filterTasks } from "./taskManager.js";

export const handleFormSubmit = (e) => {
    e.preventDefault();
    const task = {
        id: Date.now(),
        name: e.target.elements.task.value,
        status: e.target.elements.taskStatus.value
    }
    // check if the task name is empty
    if (task.name.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }
    addTask(task);
    renderTasks();
    e.target.reset();
}


export const renderTasks = () => {
    // const tasks = filterTasks("on");
    const tasks = fetchTasks();

    if (tasks.length === 0) {
        // document.getElementById("tasks").innerHTML = "<p>No task available</p>";
        return;
    } else {
        const taskList = document.getElementById("tasks");
        taskList.innerHTML = "";

        tasks.forEach(task => {
            const taskItem = document.createElement("div");

            taskItem.classList.add("task-card");
            taskItem.innerHTML = `
   <input type="checkbox" name="complete" id="complete-task">
           <p>${task.name}</p>
                    <div id="delete"   class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg></div>
        `;
            taskList.appendChild(taskItem);
        }
        )

    }
}



// delete task
export function deleteEl(id) {
    console.log(id, "delete");
    deleteTask(id);
    renderTasks();
}
