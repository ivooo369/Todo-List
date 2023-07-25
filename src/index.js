import './style.css';
import { createImages } from './domManipulation';
import { handleEventListeners } from './handleEventListeners';

createImages();
handleEventListeners();

export const addTask = (title, description, dueDate, project, priority, isDone) => {
    return { title, description, dueDate, project, priority, isDone };
};

export const inbox = {
    tasks: []
};

console.log(inbox.tasks);
