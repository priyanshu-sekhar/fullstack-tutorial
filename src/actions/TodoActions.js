export const addTask = (tasks) => (newTask) => {
    return [...tasks, {...newTask, completed: false}];
};