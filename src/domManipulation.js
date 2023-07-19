import Icon from './images/checklist-icon.png';

export function createTitleIcon() {
    const titleContainer = document.querySelector('.title-container');
    const title = document.querySelector('.title');
    const titleIcon = new Image();
    titleIcon.src = Icon;
    titleIcon.alt = 'Checklist';
    titleIcon.classList.add('title-icon');
    titleContainer.insertBefore(titleIcon, title);
}

