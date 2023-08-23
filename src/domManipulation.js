import titleImageSrc from './images/checklist-image.png';
import noTasksImageSrc from './images/no-tasks-image.png';
import noNotesImageSrc from './images/no-notes-image.png';
import { taskObject, noteObject } from './mainLogic';

const taskForm = document.querySelector('#task-form');
const projectForm = document.querySelector('#project-form');
const noteForm = document.querySelector('#note-form');
const taskTitleInput = document.querySelector('#task-title-input');
const taskDescriptionInput = document.querySelector('#task-description-input');
const taskDueDateInput = document.querySelector('#task-date-input');
const taskProjectInput = document.querySelector('#task-project-input');
const taskPriorityInput = document.querySelector('#task-priority-input');
const projectTitleInput = document.querySelector('#project-title-input');
const noteTitleInput = document.querySelector('#note-title-input');
const noteDescriptionInput = document.querySelector('#note-description-input');
const overlay = document.querySelector(".overlay");
const taskButton = document.querySelector('#task-button');
const projectButton = document.querySelector('#project-button');
const noteButton = document.querySelector('#note-button');
const creationWindow = document.querySelector('.creation-window');
const allTasksButton = document.querySelector('#all-tasks-button');
const todayTasksButton = document.querySelector('#today-tasks-button');
const weekTasksButton = document.querySelector('#week-tasks-button');
const allNotesButton = document.querySelector('#all-notes-button');
const allTasksPage = document.querySelector('#all-tasks-page');
const todayTasksPage = document.querySelector('#today-tasks-page');
const weekTasksPage = document.querySelector('#week-tasks-page');
const allNotesPage = document.querySelector('#all-notes-page');
const menuContainer = document.querySelector('.menu-container');
const pages = document.querySelectorAll('.pages');
const listOfAllTasks = document.querySelector('#list-of-all-tasks');
const listOfAllNotes = document.querySelector('#list-of-all-notes');

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
        noTasksImage.classList.add('no-tasks-image', 'image-active');
        list.appendChild(noTasksImage);
    });
}

function createNoNotesImage() {
    const listOfNotes = document.querySelector('#list-of-all-notes');
    const noNotesImage = new Image();
    noNotesImage.src = noNotesImageSrc;
    noNotesImage.alt = 'No Notes';
    noNotesImage.classList.add('no-notes-image', 'image-active');
    listOfNotes.appendChild(noNotesImage);
}

export function closeCreationWindow() {
    creationWindow.classList.remove('open-creation-window');
    projectButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
    overlay.classList.remove('overlay-active');
    taskForm.classList.add('form-active');
    projectForm.classList.remove('form-active');
    noteForm.classList.remove('form-active');
    clearFormInputs();
}

function clearFormInputs() {
    taskTitleInput.value = '';
    taskDescriptionInput.value = '';
    taskDueDateInput.value = '';
    taskPriorityInput.value = '';
    taskProjectInput.value = '';
    projectTitleInput.value = '';
    noteTitleInput.value = '';
    noteDescriptionInput.value = '';
}

export function switchToAllTasksView() {
    allTasksButton.classList.add('menu-button-active');
    todayTasksButton.classList.remove('menu-button-active');
    weekTasksButton.classList.remove('menu-button-active');
    allNotesButton.classList.remove('menu-button-active');
    allTasksPage.classList.add('page-active');
    todayTasksPage.classList.remove('page-active');
    weekTasksPage.classList.remove('page-active');
    allNotesPage.classList.remove('page-active');
}

export function switchToTodayTasksView() {
    todayTasksButton.classList.add('menu-button-active');
    allTasksButton.classList.remove('menu-button-active');
    weekTasksButton.classList.remove('menu-button-active');
    allNotesButton.classList.remove('menu-button-active');
    todayTasksPage.classList.add('page-active');
    allTasksPage.classList.remove('page-active');
    weekTasksPage.classList.remove('page-active');
    allNotesPage.classList.remove('page-active');
}

export function switchToWeekTasksView() {
    weekTasksButton.classList.add('menu-button-active');
    allTasksButton.classList.remove('menu-button-active');
    todayTasksButton.classList.remove('menu-button-active');
    allNotesButton.classList.remove('menu-button-active');
    weekTasksPage.classList.add('page-active');
    todayTasksPage.classList.remove('page-active');
    allTasksPage.classList.remove('page-active');
    allNotesPage.classList.remove('page-active');
}

export function switchToAllNotesView() {
    allNotesButton.classList.add('menu-button-active');
    allTasksButton.classList.remove('menu-button-active');
    todayTasksButton.classList.remove('menu-button-active');
    weekTasksButton.classList.remove('menu-button-active');
    allNotesPage.classList.add('page-active');
    weekTasksPage.classList.remove('page-active');
    todayTasksPage.classList.remove('page-active');
    allTasksPage.classList.remove('page-active');
}

export function toggleMenuVisibility() {
    menuContainer.classList.toggle('hidden-menu');
    pages.forEach(page => {
        page.classList.toggle('pages-full');
    });
}

export function openCreationWindow() {
    creationWindow.classList.add('open-creation-window');
    taskButton.classList.add('selection-button-active');
    overlay.classList.add('overlay-active');
}

export function showTaskForm() {
    taskForm.classList.add('form-active');
    projectForm.classList.remove('form-active');
    noteForm.classList.remove('form-active');
    taskButton.classList.add('selection-button-active');
    projectButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
}

export function showProjectForm() {
    projectForm.classList.add('form-active');
    taskForm.classList.remove('form-active');
    noteForm.classList.remove('form-active');
    projectButton.classList.add('selection-button-active');
    taskButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
}

export function showNoteForm() {
    noteForm.classList.add('form-active');
    taskForm.classList.remove('form-active');
    projectForm.classList.remove('form-active');
    noteButton.classList.add('selection-button-active');
    taskButton.classList.remove('selection-button-active');
    projectButton.classList.remove('selection-button-active');
}

export function createNewTaskContainer() {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('new-task-container');
    listOfAllTasks.appendChild(newTaskContainer);
    const newTaskStatus = document.createElement('input');
    newTaskStatus.setAttribute("type", "checkbox");
    newTaskStatus.classList.add('new-task-data', 'new-task-status');
    newTaskContainer.appendChild(newTaskStatus);
    const newTaskTitle = document.createElement('h3');
    newTaskTitle.classList.add('new-task-data', 'new-task-title');
    newTaskTitle.textContent = taskTitleInput.value;
    newTaskContainer.appendChild(newTaskTitle);
    const newTaskDate = document.createElement('p');
    newTaskDate.classList.add('new-task-data', 'new-task-date');
    newTaskDate.textContent = taskDueDateInput.value;
    newTaskContainer.appendChild(newTaskDate);
    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('new-task-data', 'icons-container');
    newTaskContainer.appendChild(iconsContainer);
    const editIcon = document.createElement('i');
    editIcon.classList.add('fas', 'fa-edit', 'icon');
    iconsContainer.appendChild(editIcon);
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash', 'icon');
    setNewTaskColor(newTaskContainer, taskPriorityInput);
    iconsContainer.appendChild(deleteIcon);
}

function setNewTaskColor(newTask, newTaskPriority) {
    if (newTaskPriority.value === 'Low') {
        newTask.style.borderLeftColor = '#006400';
    } else if (newTaskPriority.value === 'Medium') {
        newTask.style.borderLeftColor = '#ff8c00';
    } else {
        newTask.style.borderLeftColor = '#8b0000';
    }
}

export function createNewNoteContainer() {
    const newNoteContainer = document.createElement("div");
    newNoteContainer.classList.add('new-note-container');
    listOfAllNotes.appendChild(newNoteContainer);
    const newNoteTitle = document.createElement('h3');
    newNoteTitle.classList.add('new-note-title');
    newNoteTitle.textContent = noteTitleInput.value;
    newNoteContainer.appendChild(newNoteTitle);
    const newNoteDescription = document.createElement('p');
    newNoteDescription.classList.add('new-note-description');
    newNoteDescription.textContent = noteDescriptionInput.value;
    newNoteContainer.appendChild(newNoteDescription);
}

export function handlePageImageDisplaying() {
    const noTasksImage = document.querySelector('.no-tasks-image');
    const noNotesImage = document.querySelector('.no-notes-image');
    if (taskObject.tasksArray.length !== 0) {
        noTasksImage.classList.remove('image-active');
    } if (noteObject.notesArray.length !== 0) {
        noNotesImage.classList.remove('image-active');
    }
}

function setNewTaskColor(newTask, newTaskPriority) {
    if (newTaskPriority.value === 'Low') {
        newTask.style.borderLeftColor = '#006400';
    } else if (newTaskPriority.value === 'Medium') {
        newTask.style.borderLeftColor = '#ff8c00';
    } else {
        newTask.style.borderLeftColor = '#8b0000';
    }
}





