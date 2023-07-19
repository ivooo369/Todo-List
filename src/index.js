import './style.css';
import { createTitleIcon } from './domManipulation';
import { handlePagesEventListeners } from './handleEventListeners';

createTitleIcon();
handlePagesEventListeners();

export const addTask = (title, description, dueDate, project, priority, isDone) => {
    return { title, description, dueDate, project, priority, isDone };
};

export const inbox = {
    tasks: []
};

console.log(inbox.tasks);
