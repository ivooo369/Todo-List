import titleImageSrc from './images/checklist-image.png';
import noTasksImageSrc from './images/no-tasks-image.png';
import noNotesImageSrc from './images/no-notes-image.png';

export function createImages() {
    createTitleImage();
    createNoTasksImage();
    createNoNotesImage();
}

function createTitleImage() {
    const titleContainer = document.querySelector('.title-container');
    const title = document.querySelector('.title');
    const titleImage = new Image();
    titleImage.src = titleImageSrc;
    titleImage.alt = 'Checklist';
    titleImage.classList.add('title-image');
    titleContainer.insertBefore(titleImage, title);
}

function createNoTasksImage() {
    const listsOfTasks = document.querySelectorAll('.lists-of-tasks');
    listsOfTasks.forEach(list => {
        const noTasksImage = new Image();
        noTasksImage.src = noTasksImageSrc;
        noTasksImage.alt = 'No Tasks';
        noTasksImage.classList.add('no-tasks-image');
        list.appendChild(noTasksImage);
    });
}

function createNoNotesImage() {
    const listOfNotes = document.querySelector('.list-of-notes');
    const noNotesImage = new Image();
    noNotesImage.src = noNotesImageSrc;
    noNotesImage.alt = 'No Tasks';
    noNotesImage.classList.add('no-tasks-image');
    listOfNotes.appendChild(noNotesImage);
}





