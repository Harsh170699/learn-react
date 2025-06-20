const todoKey = 'reactToDo';
export const getToDoLocalStorage = () => {
    const rawToDos = localStorage.getItem(todoKey);
    if (!rawToDos) return [];
    return JSON.parse(rawToDos);
}

export const setToDoLocalStorage = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
}