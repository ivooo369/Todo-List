import './style.css';
import Icon from './images/tab-icon.png';
import { createImages } from './domManipulation';
import { handleEventListeners } from './handleEventListeners';
import { taskContainer } from './mainLogic';

const head = document.querySelector('head');
const tabIcon = document.createElement('link');
tabIcon.rel = 'icon';
tabIcon.href = Icon;
head.appendChild(tabIcon);

createImages();
handleEventListeners();

console.log(taskContainer.tasksArray);