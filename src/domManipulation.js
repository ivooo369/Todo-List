import titleImageSrc from './images/checklist-image.png';
import noTasksImageSrc from './images/no-tasks-image.png';
import noNotesImageSrc from './images/no-notes-image.png';
import { taskObject, noteObject } from './mainLogic';

const creationTaskForm = document.querySelector('#creation-task-form');
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
const creationWindow = document.querySelector('#creation-task-window');
const editWindow = document.querySelector('#edit-task-window');
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
const editTaskTitleInput = document.querySelector('#edit-task-title-input');
const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
const editTaskDueDateInput = document.querySelector('#edit-task-date-input');
const editTaskPriorityInput = document.querySelector('#edit-task-priority-input');
const editTaskProjectInput = document.querySelector('#edit-task-project-input');

export let currentTaskTitle = '';

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
    creationWindow.classList.remove('open-window');
    projectButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
    overlay.classList.remove('overlay-active');
    creationTaskForm.classList.add('form-active');
    projectForm.classList.remove('form-active');
    noteForm.classList.remove('form-active');
    clearFormInputs();
}

export function closeEditWindow() {
    editWindow.classList.remove('open-window');
    overlay.classList.remove('overlay-active');
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
    creationWindow.classList.add('open-window');
    taskButton.classList.add('selection-button-active');
    overlay.classList.add('overlay-active');
}

export function showTaskForm() {
    creationTaskForm.classList.add('form-active');
    projectForm.classList.remove('form-active');
    noteForm.classList.remove('form-active');
    taskButton.classList.add('selection-button-active');
    projectButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
}

export function showProjectForm() {
    projectForm.classList.add('form-active');
    creationTaskForm.classList.remove('form-active');
    noteForm.classList.remove('form-active');
    projectButton.classList.add('selection-button-active');
    taskButton.classList.remove('selection-button-active');
    noteButton.classList.remove('selection-button-active');
}

export function showNoteForm() {
    noteForm.classList.add('form-active');
    creationTaskForm.classList.remove('form-active');
    projectForm.classList.remove('form-active');
    noteButton.classList.add('selection-button-active');
    taskButton.classList.remove('selection-button-active');
    projectButton.classList.remove('selection-button-active');
}

function setTaskContainerId() {
    let numberOfTasks = listOfAllTasks.childElementCount;
    let taskContainerId = 0 + (numberOfTasks - 1);
    return taskContainerId;
}

export function createNewTaskContainer() {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('new-task-container');
    newTaskContainer.setAttribute('data-task', setTaskContainerId());
    listOfAllTasks.appendChild(newTaskContainer);
    const newTaskStatus = document.createElement('input');
    newTaskStatus.setAttribute('type', 'checkbox');
    newTaskStatus.classList.add('new-task-data-container', 'new-task-status');
    newTaskContainer.appendChild(newTaskStatus);
    const newTaskTitle = document.createElement('h3');
    newTaskTitle.classList.add('new-task-data-container', 'new-task-title');
    newTaskTitle.setAttribute('data-task-title', newTaskContainer.getAttribute('data-task'));
    newTaskTitle.textContent = taskTitleInput.value;
    newTaskContainer.appendChild(newTaskTitle);
    const newTaskDueDate = document.createElement('p');
    newTaskDueDate.classList.add('new-task-data-container', 'new-task-date');
    newTaskDueDate.setAttribute('data-task-date', newTaskContainer.getAttribute('data-task'));
    newTaskDueDate.textContent = taskDueDateInput.value;
    newTaskContainer.appendChild(newTaskDueDate);
    setNewTaskColor(newTaskContainer, taskPriorityInput);
    createEditAndDeleteButtons(newTaskContainer);
}

function createEditAndDeleteButtons(container) {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('new-task-data-container', 'buttons-container');
    container.appendChild(buttonsContainer);
    const editButton = document.createElement('i');
    editButton.classList.add('fas', 'fa-edit', 'edit-button', 'icon');
    buttonsContainer.appendChild(editButton);
    const deleteButton = document.createElement('i');
    deleteButton.classList.add('fas', 'fa-trash', 'delete-button', 'icon');
    buttonsContainer.appendChild(deleteButton);
}

export function setNewTaskColor(newTask, newTaskPriority) {
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
    if (taskObject.tasksArray.length === 0) {
        noTasksImage.classList.add('image-active');
    } else {
        noTasksImage.classList.remove('image-active');
    }
    if (noteObject.notesArray.length === 0) {
        noNotesImage.classList.add('image-active');
    } else {
        noNotesImage.classList.remove('image-active');
    }
}

export function openEditTaskWindow(taskToEdit) {
    const allTasksArray = taskObject.tasksArray;
    const indexToEdit = parseInt(taskToEdit.getAttribute('data-task'), 10);
    editWindow.classList.add('open-window');
    overlay.classList.add('overlay-active');
    currentTaskTitle = taskObject.taskTitlesArray[indexToEdit];
    editTaskTitleInput.value = allTasksArray[indexToEdit].title.trim();
    editTaskDescriptionInput.value = allTasksArray[indexToEdit].description.trim();
    editTaskDueDateInput.value = allTasksArray[indexToEdit].dueDate;
    editTaskPriorityInput.value = allTasksArray[indexToEdit].priority;
    // editTaskProjectInput.value = allTasksArray[indexToEdit].project;
}




