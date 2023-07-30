import './style.css';
import Icon from './images/tab-icon.png';
import { createImages } from './domManipulation';
import { handleEventListeners } from './handleEventListeners';

const head = document.querySelector('head');
const tabIcon = document.createElement('link');
tabIcon.rel = 'icon';
tabIcon.href = Icon;
head.appendChild(tabIcon);

createImages();
handleEventListeners();



// const addTask = (title, description, dueDate, project, priority) => {
//     return { title, description, dueDate, project, priority };
// };

// const inbox = {
//     tasks: []
// };

// const array = inbox.tasks;

// const task1 = addTask('demo', 'd', 324, 'fdsf', 'low');
// const task2 = addTask('deo', 'gdfgd', 343524, 'fd', 'l');
// array.push(task1);
// array.push(task2);

// const lists = document.querySelector('.lists');

// array.forEach(e => {
//     const div = document.createElement('div');
//     div.textContent = `${e.title}, ${e.description}, ${e.dueDate}, ${e.project}, ${e.priority}`;
//     lists.appendChild(div);
// });

// console.log(array);
