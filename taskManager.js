let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const addTask = (task) => {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


export const editTask = (id, updatedTask) => {
    tasks = tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const filterTasks = (status) => {
    return tasks.filter(task => task.status === status);
}


// fetch all task
export const fetchTasks = () => {
    return tasks;
}
