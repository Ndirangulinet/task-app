let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks = tasks.filter(task => task && task.name && task.name.trim() !== ""); // Remove invalid tasks

export const addTask = (task) => {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const editTask = (id, updatedTask) => {
    tasks = tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const toggleTask = (id) => {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, status: task.status === 'complete' ? 'incomplete' : 'complete' } : task
    );
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const filterTasks = (status) => {
    return tasks.filter(task => task.status === status);
};

export const fetchTasks = () => {
    return tasks;
};